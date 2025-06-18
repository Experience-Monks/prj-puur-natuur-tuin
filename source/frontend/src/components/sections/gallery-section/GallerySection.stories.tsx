import { type Meta, type StoryObj } from '@storybook/react';
import { GallerySection } from './GallerySection';

const meta = {
  title: 'sections/GallerySection',
  component: GallerySection,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      'https://picsum.photos/id/1011/800/400',
      'https://picsum.photos/id/1025/800/400',
      'https://picsum.photos/id/1035/800/400',
      'https://picsum.photos/id/1044/800/400',
    ],
  },
};
