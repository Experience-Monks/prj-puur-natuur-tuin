import { type Meta, type StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

const meta = {
  title: 'buttons/PrimaryButton',
  component: PrimaryButton,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
