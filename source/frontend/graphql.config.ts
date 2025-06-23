// Minimal graphql.config.ts for IDE support
import * as dotenv from 'dotenv';
import type { IGraphQLConfig } from 'graphql-config';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const apiUrl = `https://${process.env.SANITY_API_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.SANITY_API_DATASET}/${process.env.SANITY_API_TAG}`;

if (!apiUrl) {
  throw new Error('Error: process.env.CMS_API_URL not set');
}

const config: IGraphQLConfig = {
  schema: [
    {
      [apiUrl]: {
        headers: {
          authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
      },
    },
  ],
  documents: ['./src/**/*.ts', './src/**/*.tsx'],
};

export default config;
