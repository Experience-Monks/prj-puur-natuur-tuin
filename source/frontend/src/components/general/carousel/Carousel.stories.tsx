import { type Meta, type StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta = {
  title: 'general/Carousel',
  component: Carousel,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
};
