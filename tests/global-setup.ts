// global-setup.ts
import { chromium, Page } from '@playwright/test';

const poll = function(cb, retryDelayMs = 2000, errorTimeoutMs = 60000) {
  // catch synchronous stack to throw a helpful error later
  const timeoutError = new Error('Timeout reached');

  const getTimeout = (time) => new Promise(resolve => setTimeout(resolve, time));

  const getResult = () => Promise.resolve()
    .then(() => cb())
    .then(result => result || getTimeout(retryDelayMs).then(getResult));

  const errorTimeoutPromise = getTimeout(errorTimeoutMs)
    .then(() => Promise.reject(timeoutError));

  return Promise.race([
    getResult(),
    errorTimeoutPromise
  ]);
};

const isAppStarted = async (page: Page) => {
  try {
    await page.goto('http://localhost:4200/');
    console.log('Playwright confirmed app is running');
    return true;
  } catch (err) {
    return false;
  }
}

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await poll(() => isAppStarted(page));
  await browser.close();
}

export default globalSetup;