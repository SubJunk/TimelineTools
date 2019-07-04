import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Collections', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    page.navigateTo();
  });

  it(
    'should open the menu and toggle collections on\n' +
    'should create a collection image with the correct value\n' +
    'should expand and display the collection with the correct title',
  async () => {
    await element(by.css('.btn-floating.btn-large.red')).click();
    await element(by.css('.btn-floating.grey')).click();

    expect(
      await element(by.css('.responsive-img')).getAttribute('src')
    ).toContain(
      'X-Men_Epic_Collection_Children_of_the_Atom'
    );

    await element(by.css('.waves-effect.cover-thumbnail')).click();

    await element(by.css('.expanded-panel')).isDisplayed();

    expect(
      await element(by.css('div.title')).getText()
    ).toContain(
      'X-Men Epic Collection: Children of the Atom'
    );

    // Close collections so it doesn't interfere with the comics tests
    await element(by.css('.btn-floating.btn-large.red')).click();
    await element(by.css('.btn-floating.green')).click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
