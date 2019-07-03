import { AppPage } from './app.po';
import { browser, by, element, logging, protractor, $ } from 'protractor';

describe('Comics', () => {
  let page: AppPage;
  const EC = protractor.ExpectedConditions;


  beforeEach(() => {
    page = new AppPage();
  });

  it(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic\n' +
    'should use the arrow button to go to the next collection',
  async () => {
    await element(by.css('#expand-UncannyXMenVol15')).click();

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
    await element(by.css('img.responsive-img.current')).isDisplayed();
  });

  it('should display the correct hover text on nav arrows for comics', async () => {
    // Waits for the element with id 'abc' to contain the text 'foo'.
    await browser.wait(EC.textToBePresentInElement($('#next-comic-title'), 'Uncanny'), 5000);

    expect(
      await element(by.id('next-comic-title')).getText()
    ).toContain('Uncanny X-Men #7');

    // navigate forward and check the text updates
    await element(by.css('.button-next-comic')).click();

    expect(
      await element(by.id('next-comic-title')).getText()
    ).toContain('Uncanny X-Men #8');
  });

  it('should display the correct hover text on nav arrows for collections', async () => {
    await browser.actions().mouseMove(element(by.css('.button-next-collection'))).perform();
    await browser.wait(EC.textToBePresentInElement($('#next-collection-title'), 'X-Men'), 5000);
    expect(
      await element(by.id('next-collection-title')).getText()
    ).toContain('Tomorrow');

    await element(by.css('.button-next-collection')).click();

    expect(
      await element(by.id('next-collection-title')).getText()
    ).toContain('X-Men: First Class - Mutant Mayhem');
  });

  it('should display the selected comic cover when zoomed', async () => {
    await element(by.css('.materialboxed')).click();
    expect(
      await element(by.css('.materialboxed.active')).getAttribute('src')
    ).toContain(
      'X-Men_First_Class_Vol_1_1'
  );

    // close the lightbox so the tests can continue
    await element(by.css('.materialboxed.active')).click();
});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
