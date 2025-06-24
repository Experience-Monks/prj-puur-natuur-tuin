import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PuurNatuurTuin',
    // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
    short_name: 'PuurNatuurTuin',
    description:
      'Welkom in ons paradijs in Tuindorp Oostzaan. Altijd open voor iedereen die geniet van groen.',
    icons: [
      {
        src: '/assets/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
