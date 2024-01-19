const { expect, test } = require('@playwright/test');

import { Collections } from '../src/database/collections';
import { getSanitizedString } from './helpers';

test.describe('Collections', () => {
  test(
    'should open the menu and toggle collections on\n' +
    'should create a collection image with the correct value\n' +
    'should expand and display the collection with the correct title',
  async function({page}) {
    page.on("pageerror", async (err) => {
      await expect(err.message).toBeEmpty();
    })
    page.on("response", async (response) => {
      if (response.status() === 404) {
        await expect(response.url()).toBe('This URL responded with a 404 status');
      }
    })

    await page.goto('http://localhost:4200/');
    await page.locator('.floating-menu').click();
    await page.locator('.toggle-collections-btn').click();

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

  test('should load all collection cover images', async function({ request }) {
    for (const collection of Collections.getCollections()) {
      const imageUrl = getSanitizedString(false, collection.title);
      const response = await request.get(`/assets/covers/${imageUrl}.jpg`)
      if (!response.ok()) {
        throw new Error(`404 not found for ${imageUrl}.jpg`);
      }
    }
  });
});
