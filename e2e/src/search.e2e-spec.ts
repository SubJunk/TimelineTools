import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Search', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    page.navigateTo();
  });

  it(
    'should display the search div\n' +
    'should display correct search results',
  async () => {
    await element(by.tagName('input')).sendKeys('Uncanny X-Men Vol. 1 #1');
    expect(
      await element(by.css('.search-result')).getText()
    ).toContain(
      'Uncanny X-Men Vol. 1 #1'
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
