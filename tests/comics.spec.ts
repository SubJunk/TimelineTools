const { expect, test } = require('@playwright/test');

test.describe('Comics', () => {
  test.beforeEach(async function({page}) {
    await page.goto('http://localhost:4200/');

    await page.locator('#expand-UncannyXMenVol15').click();
  });

  test(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic\n' +
    'should use the arrow button to go to the next collection',
  async function({page}) {
    await expect(
      await page.locator('div.series').innerText()
    ).toContain(
      'Uncanny X-Men #5'
    );

    await page.locator('.button-next-comic').click();

    await expect(
      await page.locator('div.series').innerText()
    ).toContain(
      'Uncanny X-Men #6'
    );

    await page.locator('.button-next-collection').click();

    await expect(
      await page.locator('div.collection-title').innerText()
    ).toContain(
      'X-Men: First Class, Vol. 1: Tomorrow'
    );
  });

  test('should use correct style for currently selected comic', async function({page}) {
    await page.locator('img.current').isVisible();
  });

  test('should display the selected comic cover when zoomed', async function({page}) {
    await page.locator('.toggle-full-screen').click();

    await expect(
      await page.locator('.fullScreen .cover-thumbnail > img').getAttribute('src')
    ).toContain(
      'Uncanny_X-Men_Vol_1_5'
    );
  });
});
