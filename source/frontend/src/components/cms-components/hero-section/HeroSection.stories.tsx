import { type Meta, type StoryObj } from '@storybook/react';
import { TextBlock } from '../../blocks/text-block/TextBlock';
import { HeroSection } from './HeroSection';

const meta = {
  title: 'cms-components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Puur Natuur Tuin',
    subtitle: 'Discover the beauty of natural gardening',
    backgroundImage: {
      url: 'https://source.unsplash.com/random/1600x900/?garden',
      alt: 'Beautiful garden landscape',
    },
    contentBlocks: [
      <TextBlock
        key="text-block-1"
        text="Experience the tranquility and beauty of sustainable gardening with our expert design and maintenance services."
        variant="default"
        align="center"
      />,
    ],
  },
};

export const WithMultipleTextBlocks: Story = {
  args: {
    title: 'Sustainable Garden Design',
    subtitle: 'Creating harmony with nature',
    backgroundImage: {
      url: 'https://source.unsplash.com/random/1600x900/?sustainable,garden',
      alt: 'Sustainable garden design',
    },
    contentBlocks: [
      <TextBlock
        key="text-block-1"
        text="Our approach to garden design focuses on sustainability and biodiversity."
        variant="default"
        align="left"
      />,
      <TextBlock
        key="text-block-2"
        text="We use native plants and eco-friendly materials to create beautiful outdoor spaces."
        variant="large"
        align="center"
      />,
      <TextBlock
        key="text-block-3"
        text="Every garden we design is unique and tailored to your specific needs and environment."
        variant="highlight"
        align="right"
      />,
    ],
  },
};

export const Centered: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'Professional garden care and design',
    backgroundImage: {
      url: 'https://source.unsplash.com/random/1600x900/?garden,services',
      alt: 'Garden services',
    },
    contentBlocks: [
      <TextBlock
        key="text-block-1"
        text="<p>We offer a wide range of <strong>professional services</strong> including:</p><ul><li>Garden Design</li><li>Planting</li><li>Maintenance</li><li>Consultation</li></ul>"
        variant="default"
        align="center"
        richText
      />,
    ],
    variant: 'centered',
  },
};

export const Large: Story = {
  args: {
    title: 'Seasonal Offerings',
    subtitle: 'Special services for each season',
    backgroundImage: {
      url: 'https://source.unsplash.com/random/1600x900/?seasons,garden',
      alt: 'Seasonal garden',
    },
    contentBlocks: [
      <TextBlock
        key="text-block-1"
        text="Our seasonal services ensure your garden looks its best year-round, with specialized care for spring planting, summer maintenance, fall cleanup, and winter preparation."
        variant="large"
        align="center"
        maxWidth={700}
      />,
    ],
    variant: 'large',
  },
};
