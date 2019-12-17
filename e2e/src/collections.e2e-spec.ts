import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Collections', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(async () => {
    await page.navigateTo();
  });

  it(
    'should open the menu and toggle collections on\n' +
    'should create a collection image with the correct value\n' +
    'should expand and display the collection with the correct title',
  async () => {
    await element(by.css('.floating-menu')).click();
    await browser.executeScript('$(".toggle-collections-btn").click();');

    expect(
      await element(by.css('.collections .cover-thumbnail img')).getAttribute('src')
    ).toContain(
      'X-Men_Epic_Collection_Children_of_the_Atom'
    );

    await element(by.css('.cover-thumbnail')).click();

    await element(by.css('.expanded-panel')).isDisplayed();

    expect(
      await element(by.css('div.title')).getText()
    ).toContain(
      'X-Men Epic Collection: Children of the Atom'
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
