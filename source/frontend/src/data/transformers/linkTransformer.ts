// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
import {
  type ExternalLinkFragment,
  type NavigationLinkFragment,
  type SocialLinkFragment,
} from '../../graphql/graphql';
import {
  type CmsLinkProps,
  isExternalLink,
  isNavigationLink,
  isSocialLink,
  parseLink,
} from '../../utils/link.utils';

export function linkTransformer(
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  link?: NavigationLinkFragment | ExternalLinkFragment | SocialLinkFragment | null,
  customLabel?: string,
): CmsLinkProps {
  const emptyLink = {
    children: '',
    href: '#',
    target: '_self',
    ariaLabel: '',
  };

  if (!link) {
    return emptyLink;
  }

  if (isSocialLink(link)) {
    return {
      children: customLabel ?? link.label ?? '',
      href: parseLink(link),
      target: '_blank',
      ariaLabel: customLabel ?? link.ariaLabel ?? link.label ?? undefined,
    };
  }

  if (isExternalLink(link)) {
    return {
      children: customLabel ?? link.label ?? '',
      href: parseLink(link),
      target: link.target ?? undefined,
      ariaLabel: link.ariaLabel ?? '',
    };
  }

  if (isNavigationLink(link)) {
    const { label, ariaLabel, component } = link;

    return {
      children: customLabel ?? label ?? '',
      // @ts-expect-error Doesn't properly handle the component id
      href: `${parseLink(link)}#${component?.id ?? ''}`,
      target: '_self',
      ariaLabel: ariaLabel ?? '',
      // @ts-expect-error Doesn't properly handle the component id
      preventScroll: !component?.id,
    };
  }

  // eslint-disable-next-line no-console
  console.warn('Unknown link type', link);

  return emptyLink;
}
