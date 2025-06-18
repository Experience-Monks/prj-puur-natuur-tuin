// Import all fragments for components
// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from 'graphql-tag';
import { newsSectionFragment } from '../../../components/sections/news-section/NewsSection.query';
/* eslint-enable @typescript-eslint/no-unused-vars */

// Extract fragment content without using regex in template strings
const extractFragmentContent = (fragment: string, typeName: string): string => {
  const startText = `fragment ${typeName}Fragment on ${typeName} {`;
  const content = fragment
    .slice(fragment.indexOf(startText) + startText.length, fragment.lastIndexOf('}'))
    .trim();
  return content;
};

const newsFragmentContent = extractFragmentContent(newsSectionFragment, 'NewsSection');

export const getPageBySlugQueryDocument = gql`
  query GetPageBySlug($slug: String!) {
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
          title
          ${newsFragmentContent}
        }
        ... on ProgramSection {
          _type
          _key
          header {
            title
          }
        }
        ... on AboutSection {
          _type
          _key
          title
          content
          image {
            asset {
              url
            }
          }
          ctaButton {
            label
            url
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
`;

// Using raw GraphQL string to avoid codegen issues in server components
export const getPageBySlugQuery = `
  query GetPageBySlug($slug: String!) {
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
          title
          ${newsFragmentContent}
        }
        ... on ProgramSection {
          _type
          _key
          header {
            title
          }
        }
        ... on AboutSection {
          _type
          _key
          title
          content
          image {
            asset {
              url
            }
          }
          ctaButton {
            label
            url
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
`;
