import { type Meta, type StoryObj } from '@storybook/react';
import { AboutSection } from './AboutSection';

const meta = {
  title: 'cms-components/AboutSection',
  component: AboutSection,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Over ons',
    content:
      'Puur Natuur is een initiatief van enthousiaste natuurliefhebbers. Ons doel is om mensen te inspireren en bewust te maken van het belang van biodiversiteit en een gezonde leefomgeving.',
    image: {
      url: 'https://source.unsplash.com/800x400/?nature,garden',
      alt: 'Puur Natuur',
    },
    ctaLabel: 'Meer informatie',
    ctaUrl: 'https://puur-natuur-tuin.com',
  },
};
