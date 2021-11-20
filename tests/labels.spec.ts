const { expect, test } = require('@playwright/test');

test.describe('Labels', () => {
  test.beforeEach(async function({page}) {
    await page.goto('http://localhost:4200/');
  });

  test('should create a series label with the correct value', async function({page}) {
    await expect(
      await page.locator('#label-0').innerText()
    ).toEqual(
      'Uncanny X-Men'
    );
  });

  test('should create a first year heading with the correct value', async function({page}) {
    await expect(
      await page.locator('ul.years > li:nth-child(1)').innerText()
    ).toContain(
      '1963'
    );
  });

  test('should create a first month heading with the correct value', async function({page}) {
    await expect(
      await page.locator('ul.years li:nth-child(1) ul li:nth-child(1)').innerText()
    ).toEqual(
      '9'
    );
  });
});
