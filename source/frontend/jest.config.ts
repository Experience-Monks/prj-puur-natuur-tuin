import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
} satisfies Config;

export default createJestConfig(customJestConfig);
