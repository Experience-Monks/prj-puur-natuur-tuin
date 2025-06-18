import { type Metadata } from 'next';
import { type ReactElement } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Puur Natuur Tuin',
  description: 'Puur Natuur Tuin website',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <Providers>
      <ClientLayout>{children as ReactElement}</ClientLayout>
    </Providers>
  );
}
