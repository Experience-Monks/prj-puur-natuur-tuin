/* eslint-disable no-underscore-dangle */
import type { GlobalSettings } from '../../../app/[[...slug]]/page.types';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { NavigationIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { Navigation } from './Navigation';
import { navigationQuery } from './Navigation.query';
import { type NavigationProps } from './Navigation.types';

/**
 * Transforms the navigation data from Sanity CMS to the format expected by the Navigation component
 */
export const navigationTransformer = createPropsTransformer(
  Navigation,
  async (
    identifier: NavigationIdentifierFragment,
    { includeDrafts }: GlobalSettings,
  ): Promise<NavigationProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: navigationQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "NewsSection" not found or invalid.`);
    }

    const links =
      data?.links?.map((link) => ({
        label: link?.label ?? '',
        href: link?.component?.id ? `#${link?.component?.id}` : `/${link?.page?.slug?.current}`,
      })) ?? [];

    return {
      links,
      ...(data.logo?.asset
        ? {
            logo: {
              asset: {
                url: data.logo.asset.url,
              },
            },
          }
        : {}),
    };
  },
);
