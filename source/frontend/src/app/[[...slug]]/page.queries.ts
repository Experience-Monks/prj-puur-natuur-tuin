import { graphql } from '../../graphql';

export const pageContentFragment = graphql(`
  fragment PageContent on Document {
    id: _id
    __typename
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

export const pageFragment = graphql(`
  fragment PageData on Page {
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
`);

export const getPageBySlugQuery = graphql(`
  query GetPageBySlug($slug: String!) {
    pages: allPage(where: { slug: { current: { eq: $slug } } }) {
      ...PageData
    }
  }
`);

export const getLandingPageQuery = graphql(`
  query GetLandingPage {
    pages: allPage(where: { landing: { eq: true } }) {
      ...PageData
    }
  }
`);
