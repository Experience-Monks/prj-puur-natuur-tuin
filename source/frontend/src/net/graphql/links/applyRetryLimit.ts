import { RetryLink } from '@apollo/client/link/retry';

// Delay has custom logic, should not be defined here
export const applyRetryLimit = new RetryLink({
  attempts: {
    max: 10,
  },
});
