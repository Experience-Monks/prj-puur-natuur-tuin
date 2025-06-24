import { graphql } from '../../graphql';

export const pageContentFragment = graphql(`
  fragment PageContent on Document {
    id: _id
    __typename
  }
`);

export const getLandingPageQuery = graphql(`
  query getLandingPage {
    landingPage: allPage(where: { landing: { eq: true } }) {
      slug {
        current
      }
    }
  }
`);

export const getAllPagesQuery = graphql(`
  query getAllPages {
    pages: allPage {
      _id
      slug {
        current
      }
      landing
      parent {
        slug {
          current
        }
      }
    }
  }
`);

export const getSettingsQuery = graphql(`
  query GetSettingsQuery {
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
        id: _id
        _type
      }
      mainFooter {
        id: _id
        _type
      }
      nextPage
      previousPage
    }
  }
`);

export const landingPageQuery = graphql(`
  query LandingPageQuery {
    landingPage: allPage(where: { landing: { eq: true } }) {
      id: _id
      title
      slug {
        current
      }
      content {
        ...PageContent
      }
    }
  }
`);

export const pageQuery = graphql(`
  query PageQuery($slug: String!) {
    pages: allPage(where: { slug: { current: { eq: $slug } } }) {
      id: _id
      __typename
      slug {
        current
      }
      title
      openGraph {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      headerVariant
      content {
        ...PageContent
      }
      overwrittenMainNavigation {
        id: _id
        _type
      }
      overwrittenFooter {
        id: _id
        _type
      }
    }
  }
`);
