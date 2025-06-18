# Getting started with Playwright

Playwright is a powerful automation library for web browsers. It allows you to automate browser
actions, such as clicking buttons, filling forms, and navigating between pages. With Playwright, you
can write reliable and maintainable browser automation scripts in various programming languages,
including JavaScript, Python, and C#.

In this README, you will find information about the pre-requisites and installation steps to get
started with Playwright.

## Pre-requisites

- Node.js 20 or later

> Use VoltaJS or NVM to manage Node.js versions on your machine.

## Installation

To install Playwright, run the following commands in the playwright directory of the repository:

```bash
npx playwright install --with-deps
npm ci
```

After installation you can start the test runner with the following command:

```bash
npm test
# or using npx
npx playwright test
```

## Recording tests

Playwright can record your tests and generate code for you. To record a test, run the following
command:

```bash
npx playwright codegen
```

See https://playwright.dev/docs/codegen#introduction for more information.
