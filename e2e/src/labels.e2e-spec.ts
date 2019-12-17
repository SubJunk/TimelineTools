import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Labels', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('should create a series label with the correct value', async () => {
    expect(
      await element(by.css('#label-0')).getText()
    ).toEqual(
      'Uncanny X-Men'
    );
  });

  it('should create a first year heading with the correct value', async () => {
    expect(
      await element(by.css('ul.years > li:nth-child(1)')).getText()
    ).toContain(
      '1963'
    );
  });

  it('should create a first month heading with the correct value', async () => {
    expect(
      await element(by.css('ul.years li:nth-child(1) ul li:nth-child(1)')).getText()
    ).toEqual(
      '9'
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
