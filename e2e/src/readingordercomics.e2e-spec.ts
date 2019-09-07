import { AppPage } from './app.po';
import { browser, by, $$, element, logging } from 'protractor';
import { async } from 'q';

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
    'should assign the correct thumbnail',
  async () => {
    await element(by.css('.floating-menu')).click();
    await browser.executeScript('$(".toggle-display-order-btn").click();');
    // const firstRearrangedComic = $$('button')[23];
    // const firstRearrangedComic = element(by.css('#expand-XMenFirstClassVol11'));
    await element(by.css('#expand-XMenFirstClassVol11')).isVisible();
    await element(by.css('#expand-XMenFirstClassVol11')).click();
    expect(
    await element(by.css('div.series')).getText()
    ).toContain(
      'X-Men First Class'
    );

    expect(
      await element(by.css('.cover-thumbnail img')).getAttribute('src')
    ).toContain(
      'Men_First_Class_Vol_1_1'
    );
    await element(by.css('cover-thumbnail')).isDisplayed();

    expect(
      await element(by.css('.cover-thumbnail img')).getAttribute('src')
    ).toContain(
      'Men_First_Class_Vol_1_1'
    );

    // it('should correctly order the collections', async () => {
    //   await element(by.css('.button-next-collection')).click();

    //   expect(
    //     await element(by.css('div.collection-title')).getText()
    //   ).toContain(
    //     'X-Men: First Class - Mutant Mayhem'
    //   );
    // });
  });

  // it('should display the selected comic cover when zoomed', async () => {
  //   await element(by.css('.toggle-full-screen')).click();

  //   expect(
  //     await element(by.css('.fullScreen .cover-thumbnail img')).getAttribute('src')
  //   ).toContain(
  //     'X-Men_First_Class_Vol_2_1'
  //   );
  // });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
