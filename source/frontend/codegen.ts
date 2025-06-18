/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line import/no-extraneous-dependencies
import { type CodegenConfig } from '@graphql-codegen/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const apiUrl = process.env.CMS_API_URL;

if (!apiUrl) {
  throw new Error('Error: process.env.CMS_API_URL not set');
}

const config: CodegenConfig = {
  schema: [
    {
      [apiUrl]: {
        headers: {
          authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/data/graphql/**/*.ts', 'src/**/*.query.ts'],
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    './src/graphql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, string>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
        namingConvention: {
          transformUnderscore: true,
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
