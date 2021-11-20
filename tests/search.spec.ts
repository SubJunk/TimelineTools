const { expect, test } = require('@playwright/test');

test.describe('Search', () => {
  test.beforeEach(async function({page}) {
    await page.goto('http://localhost:4200/');
  });

  test(
    'should display the search div\n' +
    'should display correct search results',
  async function({page}) {
    await page.locator('input').fill('Uncanny X-Men Vol. 1 #100');
    await expect(
      await page.locator('.search-result').innerText()
    ).toContain(
      'Uncanny X-Men Vol. 1 #100'
    );
  });

  test(
    'should display correct partial search results',
  async function({page}) {
    await page.locator('input').fill('Cable met 2');
    await expect(
      await page.locator('.search-result').innerText()
    ).toContain(
      'Cable: Blood & Metal Vol. 1 #2'
    );
  });
});
