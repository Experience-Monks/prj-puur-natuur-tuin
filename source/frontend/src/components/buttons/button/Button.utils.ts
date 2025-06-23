/**
 * Processes a CMS button link and returns the appropriate href URL
 * Handles internal links, external URLs, and email addresses
 */
export function processButtonLink(buttonData: {
  link?: {
    linkType?: 'internal' | 'external' | 'email';
    internalLink?: { slug?: { current?: string } };
    externalUrl?: string;
    emailAddress?: string;
  };
  url?: string;
}): string | undefined {
  // Process the link based on link type
  if (buttonData.link) {
    const { linkType, internalLink, externalUrl, emailAddress } = buttonData.link;

    if (linkType === 'internal' && internalLink?.slug?.current) {
      return `/${internalLink.slug.current}`;
    }
    if (linkType === 'external' && externalUrl) {
      return externalUrl;
    }
    if (linkType === 'email' && emailAddress) {
      return `mailto:${emailAddress}`;
    }
  } else if (buttonData.url) {
    return buttonData.url;
  }

  return undefined;
}
