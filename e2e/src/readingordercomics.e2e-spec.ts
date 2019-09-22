import { AppPage } from './app.po';
import { browser, by, $, element, logging } from 'protractor';

/**
 * Vertically scroll top-left corner of the given element (y-direction) into viewport.
 * @param scrollToElement element to be scrolled into visible area
 */
function scrollToX(scrollToElement) {
  const wd = browser.driver;
  return scrollToElement.getLocation().then((loc: { x: any; }) => {
    return wd.executeScript('window.scrollTo(arguments[0], 0);', loc.x);
  });
}

describe('Reading Order Comics', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(async () => {
    await page.navigateTo();
  });

  it(
    'should open the menu and change to reading order\n' +
    'should arrange the comics in reading order\n' +
    'should open the expanded panel\n' +
    'should assign the correct thumbnail',
  async () => {
    await element(by.css('.floating-menu')).click();
    await browser.executeScript('$(".toggle-display-order-btn").click();');
    const firstRearrangedComic = element(by.css('.comic-container:nth-child(24)'));
    await scrollToX(firstRearrangedComic);
    await firstRearrangedComic.click();
    await element(by.css('div.series')).isDisplayed();
    expect(
      await element(by.css('div.series')).getText()
    ).toContain(
      'X-Men: First Class #1'
    );

    expect(
      await element(by.css('.cover-thumbnail img')).getAttribute('src')
    ).toContain(
      'X-Men_Vol_1_1'
    );
  });

  it('collections should still be correctly ordered', async () => {
    await element(by.css('.floating-menu')).click();
    await browser.executeScript('$(".toggle-display-order-btn").click();');
    const firstRearrangedComic = element(by.css('.comic-container:nth-child(24)'));
    await scrollToX(firstRearrangedComic);
    await firstRearrangedComic.click();
    await element(by.css('.button-next-collection')).isEnabled();
    await element(by.css('.button-next-collection')).click();
    await element(by.css('div.collection-title')).isDisplayed();
    expect(
      await element(by.css('div.collection-title')).getText()
    ).toContain(
      'X-Men: First Class - Mutant Mayhem'
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
