import { expect, test } from '@playwright/test';
import { findKey } from 'lodash';

import { Comics } from '../src/database/comics';
import { SeriesVolumes } from 'src/database/series';
import { getSanitizedString } from './helpers';

const seriesVolumes = SeriesVolumes.getSeriesVolumes();

test.describe('Comics', () => {
  test.describe('Browser tests', () => {
    test.beforeEach(async function({page}) {
      await page.goto('http://localhost:4200/');

      await page.locator('#expand-UncannyXMenVol15').click();
      page.on("pageerror", async (err) => {
        await expect(err.message).toBeEmpty();
      })
      page.on("response", async (response) => {
        if (response.status() === 404) {
          await expect(response.url()).toBe('This URL responded with a 404 status');
        }
      })
    });

    test(
      'should create a comic thumbnail with the correct value\n' +
      'should open the expanded panel with the correct title\n' +
      'should use the arrow button to go to the next comic\n' +
      'should use the arrow button to go to the next collection',
    async function({page}) {
      await expect(
        await page.locator('.expanded-comic-container div.series').innerText()
      ).toContain(
        'Uncanny X-Men #5'
      );

      await page.locator('.expanded-comic-container .button-next-comic').click();

      await expect(
        await page.locator('.expanded-comic-container div.series').innerText()
      ).toContain(
        'Uncanny X-Men #6'
      );

      await page.locator('.expanded-comic-container .button-next-collection').click();

      await expect(
        await page.locator('.expanded-comic-container div.collection-title').innerText()
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

  test('should load all comic cover images', async function({ request }) {
    for (const comic of Comics.getComics()) {
      const currentSeriesVolume = seriesVolumes[findKey(seriesVolumes, { id: comic.seriesVolumeId })];
      const imageUrl = getSanitizedString(true, currentSeriesVolume.title, currentSeriesVolume.volume, comic.issue);
      const response = await request.get(`/assets/covers/${imageUrl}.jpg`)
      if (!response.ok()) {
        throw new Error(`404 not found for ${imageUrl}.jpg`);
      }
    }
  });
});
