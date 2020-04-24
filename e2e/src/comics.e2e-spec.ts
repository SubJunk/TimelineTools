import { AppPage } from './app.po';
import { $, ExpectedConditions, browser, by, element, logging } from 'protractor';

describe('Comics', () => {
  let page: AppPage;
  const EC = ExpectedConditions;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(async () => {
    await page.navigateTo();

    await browser.wait(EC.elementToBeClickable($('#expand-UncannyXMenVol15')));
    await element(by.css('#expand-UncannyXMenVol15')).click();
  });

  it(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic\n' +
    'should use the arrow button to go to the next collection',
  async () => {
    expect(
      await element(by.css('div.series')).getText()
    ).toContain(
      'Uncanny X-Men #5'
    );

    await element(by.css('.button-next-comic')).click();

    expect(
      await element(by.css('div.series')).getText()
    ).toContain(
      'Uncanny X-Men #6'
    );

    await element(by.css('.button-next-collection')).click();

    expect(
      await element(by.css('div.collection-title')).getText()
    ).toContain(
      'X-Men: First Class, Vol. 1: Tomorrow'
    );
  });

  it('should use correct style for currently selected comic', async () => {
    await element(by.css('img.current')).isDisplayed();
  });

  it('should display the selected comic cover when zoomed', async () => {
    await element(by.css('.toggle-full-screen')).click();

    expect(
      await element(by.css('.fullScreen .cover-thumbnail img')).getAttribute('src')
    ).toContain(
      'Uncanny_X-Men_Vol_1_5'
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
