import Head from 'next/head';
import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { cspEnabled, cspHeader } from '../../../../csp.config';

const isDevelopment = process.env.NODE_ENV !== 'production';

function HeadSection(): ReactElement {
  const { t } = useTranslation('general');

  return (
    <Head>
      <title>{t('title')}</title>

      <meta name="title" content={t('title')} />

      <meta name="description" content={t('description')} />

      {!isDevelopment && cspEnabled && (
        <meta httpEquiv="Content-Security-Policy" content={cspHeader} />
      )}

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}

export default HeadSection;
