import { type Meta, type StoryObj } from '@storybook/react';
import { IntroSection } from './IntroSection';

const meta = {
  title: 'cms-components/IntroSection',
  component: IntroSection,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content:
      'We hebben dit jaar weer een super leuk programma. Maar ook als er niets op de agenda staat ben je van harte welkom om te komen spelen, ontdekken, en een vuurtje te stoken. Zelf iets organiseren? Contact ons.',
  },
};
