import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Info', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(
    'should open the info page from the menu\n' +
    'should display the credits information',
  async () => {
    await element(by.css('.btn-floating.btn-large.red')).click();
    await element(by.css('.btn-floating.blue')).click();

    expect(
      await element(by.css('.modal-content')).element(by.tagName('h4')).getText()
    ).toContain(
      'Info & Credits'
    );

    // Close the info box
    await element(by.css('.modal-close.waves-effect.waves-green.btn-flat')).click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
