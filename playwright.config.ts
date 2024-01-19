import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  globalSetup: require.resolve('./tests/global-setup'),
  maxFailures: 1,
  use: {
    baseURL: 'http://localhost:4200',
  },
  // uncomment this to see the browser
  // use: {
  //   headless: false,
  // }
});