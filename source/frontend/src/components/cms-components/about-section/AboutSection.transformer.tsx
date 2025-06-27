import type { GlobalSettings } from '../../../app/[[...slug]]/page.types';
import { createPropsTransformer } from '../../../data/transformers/createPropsTransformer';
import type { AboutSectionIdentifierFragment } from '../../../graphql/graphql';
import { graphqlRequest } from '../../../net/graphql/graphqlRequest';
import { processButtonLink } from '../../buttons/button/Button.utils';
import { AboutSection } from './AboutSection';
import { aboutSectionQuery } from './AboutSection.query';
import { type AboutSectionProps } from './AboutSection.types';

export const aboutSectionTransformer = createPropsTransformer(
  AboutSection,
  async (
    identifier: AboutSectionIdentifierFragment,
    { includeDrafts }: GlobalSettings,
  ): Promise<AboutSectionProps> => {
    const { id } = identifier;

    const { data } = await graphqlRequest({
      query: aboutSectionQuery,
      variables: {
        id: id ?? '',
      },
      includeDrafts,
    });

    if (!data) {
      throw new ReferenceError(`Content entry "${id}" of type "C101Hero" not found or invalid.`);
    }

    // Transform the data into the component props format
    return {
      title: data.title ?? '',
      content: data.content ?? '',
      // Transform image if it exists with URL
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      image: data.image?.asset?.url
        ? {
            url: data.image.asset.url,
            alt: data.title || 'About us image',
            width: data.image.asset.metadata?.dimensions?.width ?? undefined,
            height: data.image.asset.metadata?.dimensions?.height ?? undefined,
          }
        : undefined,
      // TODO: Transform CTA button
      showButton: true,
      // Transform CTA button
      ctaLabel: data.ctaButton?.text ?? '',
      // TODOTransform CTA button
      ctaUrl: processButtonLink({}),
    };
  },
);
