import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Info', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    page.navigateTo();
  });

  it(
    'should open the info page from the menu\n' +
    'should display the credits information',
  async () => {
    await element(by.css('.floating-menu')).click();
    await browser.executeScript('$(".toggle-info-btn").click();');

    expect(
      await element(by.css('.mat-dialog-title')).element(by.tagName('h1')).getText()
    ).toContain(
      'Info & Credits'
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
