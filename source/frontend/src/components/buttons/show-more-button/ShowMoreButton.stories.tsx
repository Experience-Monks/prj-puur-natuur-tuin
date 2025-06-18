import { type Meta, type StoryObj } from '@storybook/react';
import { ShowMoreButton } from './ShowMoreButton';

const meta = {
  title: 'buttons/ShowMoreButton',
  component: ShowMoreButton,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'Show more',
  },
};
