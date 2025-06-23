// Import all fragments for components
import { graphql } from '../../../graphql/gql';

export const getPageBySlugQuery = graphql(`
  query getPageBySlug($slug: String!) {
    pages: allPage(where: { slug: { current: { eq: $slug } } }) {
      _id
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
        __typename
        ... on NewsSection {
          _type
          _key
          header {
            title
          }
          enabled
          showButton
          ctaButton {
            text
            link {
              linkType
              internalLink {
                _id
                slug {
                  current
                }
              }
              externalUrl
              emailAddress
            }
          }
        }
        ... on ProgramSection {
          _type
          _key
          header {
            title
          }
          enabled
          showButton
          ctaButton {
            text
            link {
              linkType
              internalLink {
                _id
                slug {
                  current
                }
              }
              externalUrl
              emailAddress
            }
          }
        }
        ... on IntroSection {
          _type
          _key
          title
          blocks {
            ... on IntroTextBlock {
              _key
              _type
              text
            }
            ... on IntroIconBlock {
              _key
              _type
              iconType
            }
          }
          content
          subtitle
          cta {
            text
            link {
              linkType
              internalLink {
                _id
                slug {
                  current
                }
              }
              externalUrl
              emailAddress
            }
          }
          showButton
          enabled
        }
        ... on HeroSection {
          _type
          _key
          title
          subtitle
          enabled
          backgroundImage {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          contentBlocks {
            _key
            _type
            text
            richText
            variant
            align
            maxWidth
          }
          ctaButton {
            text
            link {
              linkType
              internalLink {
                _id
                slug {
                  current
                }
              }
              externalUrl
              emailAddress
            }
          }
          variant
        }
        ... on GallerySection {
          _type
          _key
          images {
            asset {
              url
            }
          }
          enabled
        }
        ... on AboutSection {
          _type
          _key
          title
          content
          image {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          ctaButton {
            text
            link {
              linkType
              internalLink {
                _id
                slug {
                  current
                }
              }
              externalUrl
              emailAddress
            }
          }
        }
      }
      overwrittenMainNavigation {
        _id
        _type
      }
      overwrittenFooter {
        _id
        _type
      }
    }
  }
`);
