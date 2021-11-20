const { expect, test } = require('@playwright/test');

test.describe('Info', () => {
  test.beforeEach(async function({page}) {
    await page.goto('http://localhost:4200/');
  });

  test(
    'should open the info page from the menu\n' +
    'should display the credits information',
  async function({page}) {
    await page.locator('.floating-menu').click();
    await page.locator('.toggle-info-btn').click();

    await expect(
      await page.locator('.mat-dialog-title').innerText()
    ).toContain(
      'Info & Credits'
    );
  });
});
