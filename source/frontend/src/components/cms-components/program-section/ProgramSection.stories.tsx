import { type Meta, type StoryObj } from '@storybook/react';
import { ProgramSection } from './ProgramSection';

const meta = {
  title: 'cms-components/ProgramSection',
  component: ProgramSection,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Het Programma',
    programs: [
      {
        id: '1',
        title: 'Lentefeest',
        date: '2025-05-01',
        time: '10:00',
        image: '/assets/images/program/gardening.png',
        description: 'Eerst samen klussen aan de tuin en daarna een lekker borrel en bijpraten.',
        month: '',
      },
      {
        id: '2',
        title: 'Puur Natuur Workshop',
        date: '2025-05-10',
        time: '10:00',
        image: '/assets/images/program/theater.png',
        description: 'Ontdek de diversiteit aan planten en hoe je ze herkent.',
        month: '',
      },
      {
        id: '3',
        title: 'Avondwandeling',
        date: '2025-05-20',
        time: '19:00',
        image: '/assets/images/program/music.png',
        description: 'Geniet van de rust en de geluiden van de natuur in de avond.',
        month: '',
      },
      {
        id: '4',
        title: 'Insectensafari',
        date: '2025-06-01',
        time: '09:00',
        image: '/assets/images/program/picnic.png',
        description: 'Ga op zoek naar bijzondere insecten met een gids.',
        month: '',
      },
      {
        id: '5',
        title: 'Natuurfotografie',
        date: '2025-06-15',
        time: '11:00',
        image: '/assets/images/program/gardening.png',
        description: 'Tips & tricks voor het fotograferen van de natuur.',
        month: '',
      },
    ],
  },
};
