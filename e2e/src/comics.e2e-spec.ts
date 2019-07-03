import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Comics', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic',
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
  });

  it('should display the correct hover text on nav arrows for comics', async () => {
    expect(
      await element(by.css('.next-comic-title')).getText()
    ).toContain('Uncanny X-Men #7');

    // navigate forward and check the text updates
    await element(by.css('.button-next-comic')).click();

    expect(
      await element(by.css('.next-comic-title')).getText()
    ).toContain('Uncanny X-Men #8');
  });

  it('should display the correct hover text on nav arrows for collections', async () => {
    await element(by.css('.button-next-collection')).click();

    expect(
      await element(by.css('.next-collection-title')).getText()
    ).toContain('X-Men: First Class - Mutant Mayhem');

    await element(by.css('.button-next-collection')).click();

    expect(
      await element(by.css('.next-collection-title')).getText()
    ).toContain('X-Men: First Class - Band of Brothers');
  });

  it('should display the selected comic cover when zoomed', async () => {
    await element(by.css('.materialboxed')).click();
    expect(
      await element(by.css('.materialboxed.active')).getAttribute('src')
    ).toContain(
      'X-Men_First_Class_Vol_2_1'
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
