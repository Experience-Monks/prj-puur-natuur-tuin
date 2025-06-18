import { type Meta, type StoryObj } from '@storybook/react';
import { NewsSection } from './NewsSection';

const meta = {
  title: 'sections/NewsSection',
  component: NewsSection,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Het Laatste Nieuws',
    news: [
      {
        id: '1',
        title: 'De grote lenteschoonmaak is begonnen',
        date: '2025-04-10',
        icon: '/assets/images/news/flower.png',
      },
      {
        id: '2',
        title: 'Onze samenwerking met het basisonderwijs',
        date: '2025-04-05',
        icon: '/assets/images/news/hand.png',
      },
      {
        id: '3',
        title: 'Er is een egel in de tuin komen wonen',
        date: '2025-03-28',
        icon: '/assets/images/news/hedgehog.png',
      },
      {
        id: '4',
        title: 'Lente-excursie voor kinderen',
        date: '2025-03-15',
        icon: '/assets/images/news/sun.png',
      },
      {
        id: '5',
        title: 'Het tuinplan voor dit jaar',
        date: '2025-03-01',
        icon: '/assets/images/news/flower.png',
      },
    ],
  },
};
