import { type Metadata } from 'next';
import { type ReactElement, type ReactNode } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { Providers } from '../utils/providers';

export const metadata: Metadata = {
  title: 'Puur Natuur Tuin',
  description: 'Puur Natuur Tuin website',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <Providers>
      <ClientLayout>{children as ReactElement}</ClientLayout>
    </Providers>
  );
}
