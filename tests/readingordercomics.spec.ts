const { expect, test } = require('@playwright/test');

test.describe('Reading Order Comics', () => {
  test.beforeEach(async function({page}) {
    await page.goto('http://localhost:4200/');
  });

  test(
    'should open the menu and change to reading order\n' +
    'should arrange the comics in reading order\n' +
    'should open the expanded panel\n' +
    'should assign the correct thumbnail\n' +
    'collections should still be correctly ordered',
  async function({page}) {
    await page.locator('.floating-menu').click();
    await page.locator('.toggle-display-order-btn').click();
    const firstRearrangedComic = await page.locator('.comic-container:nth-child(24)');
    await firstRearrangedComic.click(); // this line scrolls to the element
    const firstRearrangedComicButton = await firstRearrangedComic.locator('button');
    await firstRearrangedComicButton.click();

    await expect(
      await page.locator('div.series').innerText()
    ).toContain(
      'X-Men: First Class #1'
    );

    await expect(
      await page.locator('#expand-UncannyXMenVol11 img').getAttribute('src')
    ).toContain(
      'X-Men_Vol_1_1'
    );

    await page.locator('.button-next-collection').isEnabled();
    await page.locator('.button-next-collection').click();
    await expect(
      await page.locator('div.collection-title').innerText()
    ).toContain(
      'X-Men: First Class - Mutant Mayhem'
    );
  });
});
