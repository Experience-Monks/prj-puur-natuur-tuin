import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import { type FooterIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { Footer } from './Footer';
import { footerQuery } from './Footer.query';
import type { FooterProps } from './Footer.types';

export const footerTransformer = createPropsTransformer(
  Footer,
  async (
    identifier: FooterIdentifierFragment,
    { includeDrafts }: { includeDrafts: boolean },
  ): Promise<FooterProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: footerQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "Footer" not found or invalid.`);
    }

    // Transform the CMS data to the component props format
    return {
      links:
        data.navigationItems?.map((item) => {
          // Get the URL (either direct URL or from reference)
          const href =
            item?.link?.externalUrl ??
            (item?.link?.page?.slug?.current ? `/${item.link.page.slug.current}` : '#');

          return {
            label: item?.title ?? '',
            href,
          };
        }) ?? [],
      socialLinks:
        data.socialLinks?.map((link) => ({
          label: link?.label ?? '',
          href: link?.url ?? '#',
          icon: undefined,
        })) ?? [],
      copyright: data.copyright ?? undefined,
    };
  },
);
