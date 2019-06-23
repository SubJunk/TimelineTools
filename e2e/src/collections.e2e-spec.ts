import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Collections', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
      // somehow need to update this to whatever should actually be appended to show collections
      browser.getCurrentUrl().then((url) => {
        browser.get(url + '?showCollections=1');
      });
    });

    it('should create a collection image', async () => {
      expect
      // collections aren't working at the moment, change to .collections when they are
      await element(by.css('.responsive-img')).isDisplayed()
    });

    it ('should display the correct collection image', async () => {
        expect(
        await element(by.css('.responsive-img')).getAttribute('src')
        ).toContain(
        'Uncanny_X-Men_Vol_1_1'
      );
    });
});
