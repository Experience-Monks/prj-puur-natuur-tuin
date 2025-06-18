import { type Meta, type StoryObj } from '@storybook/react';
import { TextBlock } from './TextBlock';

const meta = {
  title: 'Blocks/TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default text block with standard styling.',
    variant: 'default',
    align: 'left',
  },
};

export const Large: Story = {
  args: {
    text: 'This is a large text block with primary color.',
    variant: 'large',
    align: 'left',
  },
};

export const Highlight: Story = {
  args: {
    text: 'This is a highlighted text block with bold styling.',
    variant: 'highlight',
    align: 'left',
  },
};

export const Centered: Story = {
  args: {
    text: 'This text block is centered on the page.',
    variant: 'default',
    align: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    text: 'This text block is aligned to the right.',
    variant: 'default',
    align: 'right',
  },
};

export const WithRichText: Story = {
  args: {
    text: '<p>This is a <strong>rich text</strong> block with <em>formatting</em>.</p>',
    variant: 'default',
    align: 'left',
    richText: true,
  },
};

export const WithMaxWidth: Story = {
  args: {
    text: 'This text block has a maximum width of 400 pixels to demonstrate constrained layout.',
    variant: 'default',
    align: 'left',
    maxWidth: 400,
  },
};
