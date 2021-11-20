const { expect, test } = require('@playwright/test');

test.describe('Collections', () => {
  test(
    'should open the menu and toggle collections on\n' +
    'should create a collection image with the correct value\n' +
    'should expand and display the collection with the correct title',
  async function({page}) {
    await page.goto('http://localhost:4200/');

    await page.locator('.floating-menu').click();
    await page.locator('.toggle-collections-btn').click();
    // await page.evaluate(() => $(".toggle-collections-btn").click());
    // await browser.executeScript('$(".toggle-collections-btn").click();');

    await expect(
      await page.locator('#expand-XMenEpicCollectionChildrenoftheAtom img').getAttribute('src')
    ).toContain(
      'X-Men_Epic_Collection_Children_of_the_Atom'
    );

    await page.locator('#expand-XMenEpicCollectionChildrenoftheAtom').click();

    await page.locator('.expanded-panel').isVisible();

    await expect(
      await page.locator('div.title').innerText()
    ).toContain(
      'X-Men Epic Collection: Children of the Atom'
    );
  });
});
