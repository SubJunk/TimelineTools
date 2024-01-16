import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./tests/global-setup'),
  maxFailures: 1,
  // uncomment this to see the browser
  // use: {
  //   headless: false,
  // }
};

export default config;