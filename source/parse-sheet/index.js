const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const {set, toPath, trimStart, trimEnd} = require('lodash');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first time.
const TOKEN_PATH = 'token.json';

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token, null, '  '), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

const checkDestinationFolder = (path) =>
  new Promise((resolve) => {
    if (fs.existsSync(path)) {
      resolve();
    } else {
      console.log('Creating folder:', path);
      fs.mkdir(path, { recursive: true }, () => resolve());
    }
  });

const writeFile = async (path, fileName, data) => {
  await checkDestinationFolder(path);

  fs.writeFile(`${path}/${fileName}`, JSON.stringify(data), 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log(`JSON file ${path}/${fileName} has been saved.`);
  });
};

const createOutput = (outputPath, parsedData, splitObjects = false) => {
  Object.keys(parsedData).forEach(key => {
    if (splitObjects) {
      Object.keys(parsedData[key]).forEach(fileName => {
        writeFile(`${outputPath}${key}`, `${fileName}.json`, parsedData[key][fileName]);
      });
    } else {
      writeFile(`${outputPath}${key}`, `general.json`, parsedData[key]);
    }
  });
};

const getTabs = (sheets, sheetId) => {
  return new Promise(resolve => {
    sheets.spreadsheets.get({
      spreadsheetId: sheetId,
      ranges: [],
      includeGridData: false,
    }, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      resolve(response.data.sheets.map(sheet => sheet.properties.title));
    });
  });
};

const parseRowValue = value => {
  let returnValue = trimEnd(trimStart(value));

  // Find \r and \n, trims them at start and end. and replace them inbetween
  return ['\r', '\n'].reduce((previous, currentReplace) => {
    previous = trimEnd(trimStart(previous, currentReplace), currentReplace);
    return previous;
  }, returnValue)
    .replace(/\r\n/g, '\n')
    .replace(/\b\r/g, '\n')
    .replace(/\n/g, '\n')
    .replace(/\r/g, '\n');
};

const lowercaseFirst = value => value.replace(/^\w/, c => c.toLowerCase());

exports.getNewToken = getNewToken;
exports.getTabs = getTabs;
exports.parseRowValue = parseRowValue;
exports.lowercaseFirst = lowercaseFirst;
exports.authorize = authorize;
exports.createOutput = createOutput;

exports.TOKEN_PATH = TOKEN_PATH;
exports.SCOPES = SCOPES;