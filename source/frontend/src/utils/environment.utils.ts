export const isServerSide = typeof window === 'undefined';

export const isClientSide = !isServerSide;

export const isStorybook = Boolean(process.env.STORYBOOK);
