import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import { linkTransformer } from '../../../data/transformers/linkTransformer';
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
      links: data.links?.map((link) => linkTransformer(link)) ?? [],
      copyrightLeft: data.copyrightLeft ?? undefined,
      copyrightRight: data.copyrightRight ?? undefined,
    };
  },
);
