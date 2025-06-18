import { type Meta, type StoryObj } from '@storybook/react';
import { NewsCard } from './NewsCard';

const meta = {
  title: 'NewsCard',
  component: NewsCard,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'De grote lenteschoonmaak is begonnen',
    date: '2025-04-10',
    icon: '/assets/images/news/flower.png',
  },
};
