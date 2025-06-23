/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line import/no-extraneous-dependencies
import { type CodegenConfig } from '@graphql-codegen/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const apiUrl = `https://${process.env.SANITY_API_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.SANITY_API_DATASET}/${process.env.SANITY_API_TAG}`;

if (!apiUrl) {
  throw new Error('Error: process.env.CMS_API_URL not set');
}

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [apiUrl]: {
        headers: {
          authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/data/graphql/**/*.ts', '**/*.fragment.ts', '**/*.query.ts', '**/*.queries.ts'],
  hooks: {
    afterAllFileWrite: ['prettier --ignore-path "" --write src/graphql/**/*'],
  },
  generates: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    './src/graphql/': {
      preset: 'client',
      config: {
        nonOptionalTypename: true,
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
