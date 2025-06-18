import { graphql } from '../../../graphql';

export const getSettingsQuery = graphql(`
  query getSettings {
    settings: allSiteSettings(limit: 1) {
      openGraphTitle
      openGraphDescription
      openGraphImage {
        asset {
          url
        }
      }
      fallbackImage {
        asset {
          url
        }
      }
      mainNavigation {
        _id
        _type
      }
      mainFooter {
        _id
        _type
      }
      nextPage
      previousPage
    }
  }
`);
