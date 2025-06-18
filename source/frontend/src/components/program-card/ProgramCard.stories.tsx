import { type Meta, type StoryObj } from '@storybook/react';
import { ProgramCard } from './ProgramCard';

const meta = {
  title: 'ProgramCard',
  component: ProgramCard,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Lentefeest',
    date: '2025-05-01',
    month: 'Mei',
    time: '10:00',
    image: '/assets/images/program/gardening.png',
    description: 'Eerst samen klussen aan de tuin en daarna een lekker borrel en bijpraten.',
  },
};
