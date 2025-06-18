import { createServer as createHttpServer } from 'node:http';
import { createServer as createHttpsServer } from 'node:https';
import process from 'node:process';
import { parse } from 'node:url';
import detectPort from 'detect-port';
import minimist from 'minimist';
import next from 'next';
import selfsigned from 'selfsigned';
import { postInstallCheck } from './utils/postInstallCheck.js';

const defaultPort = 2001;

// eslint-disable-next-line no-underscore-dangle
const _arguments = process.argv.slice(2);
const argv = minimist(_arguments);

const isDevelopment = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = await detectPort(defaultPort);

const useHttps = Boolean(argv.https);

// eslint-disable-next-line no-underscore-dangle
process.env.__NEXT_REACT_ROOT = 'true';

let httpsOptions = {};

postInstallCheck(isDevelopment);

if (useHttps) {
  httpsOptions = await new Promise((resolve, reject) => {
    selfsigned.generate(
      [{ name: 'commonName', value: 'localhost' }],
      {
        algorithm: 'sha256',
        days: 30,
        keySize: 2048,
        extensions: [
          {
            name: 'basicConstraints',
            cA: true,
          },
          {
            name: 'keyUsage',
            keyCertSign: true,
            digitalSignature: true,
            nonRepudiation: true,
            keyEncipherment: true,
            dataEncipherment: true,
          },
          {
            name: 'extKeyUsage',
            serverAuth: true,
            clientAuth: true,
            codeSigning: true,
            timeStamping: true,
          },
          {
            name: 'subjectAltName',
            altNames: [
              {
                // type 2 is DNS
                type: 2,
                value: 'localhost',
              },
              {
                type: 2,
                value: 'localhost.localdomain',
              },
              {
                type: 2,
                value: 'lvh.me',
              },
              {
                type: 2,
                value: '*.lvh.me',
              },
              {
                type: 2,
                value: '[::1]',
              },
              {
                // type 7 is IP
                type: 7,
                ip: '127.0.0.1',
              },
              {
                type: 7,
                ip: 'fe80::1',
              },
            ],
          },
        ],
      },
      (error, pems) => {
        if (error) {
          reject(error);
          return;
        }

        resolve({
          key: pems.private,
          cert: pems.cert,
        });
      },
    );
  });
}

const app = next({
  dev: isDevelopment,
  hostname,
  port,
});

const handle = app.getRequestHandler();

const requestListener = async (request, result) => {
  try {
    if (request.url) {
      const parsedUrl = parse(request.url, true);

      await handle(request, result, parsedUrl);
    } else {
      throw new Error('No url found');
    }
  } catch (serverError) {
    // eslint-disable-next-line no-console
    console.error('Error occurred handling', request.url, serverError);
    // eslint-disable-next-line require-atomic-updates
    result.statusCode = 500;
    result.end('internal server error');
  }
};

const createServer = useHttps
  ? (_requestListener) => createHttpsServer(httpsOptions, _requestListener)
  : createHttpServer;

await app.prepare();

const server = createServer(requestListener);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`> Ready on http${useHttps ? 's' : ''}://${hostname}:${port}`);
});
