import {devices, type PlaywrightTestConfig} from '@playwright/test';

// Reference: https://playwright.dev/docs/test-configuration
export default {
    // Test directory
    testDir: 'tests',

    // If a test fails, retry it additional 2 times
    retries: 2,

    use: {
        // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
        // More information: https://playwright.dev/docs/trace-viewer
        trace: 'retry-with-trace',
    },

    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                ...devices['Desktop Safari'],
            },
        },
    ],
} satisfies PlaywrightTestConfig;
