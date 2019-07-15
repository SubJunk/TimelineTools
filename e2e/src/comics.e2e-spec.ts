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

    await element(by.css('img.responsive-img.current')).isDisplayed();

    browser.actions().mouseMove(element(by.css('.button-next-collection'))).perform().then(() => {
      // perform another mousemove to try and trigger tooltip
      browser.actions().mouseMove({x: 5, y: 5}).perform();
      const tooltip = $('.next-collection-title');
      // wait for present AND visible
      const visible = EC.visibilityOf(tooltip);
      const present = EC.presenceOf(tooltip);
      browser.wait(EC.and(present, visible), 5000, 'Expected tooltip to appear').then(() => {
        expect(tooltip.getText()).toContain('Mutant Mayhem');
      });
  });
    // expect(
    //   await element(by.css('.next-collection-title')).getText()
    // ).toContain(
    //   'Mutant Mayhem'
    // );
    await element(by.css('.button-next-collection')).click();

    browser.actions().mouseMove(element(by.css('.button-next-collection'))).perform().then(() => {
      // perform another mousemove to try and trigger tooltip
      browser.actions().mouseMove({x: 5, y: 5}).perform();
      const tooltip = $('.next-collection-title');
      // wait for present AND visible
      const visible = EC.visibilityOf(tooltip);
      const present = EC.presenceOf(tooltip);
      browser.wait(EC.and(present, visible), 5000, 'Expected tooltip to appear').then(() => {
        expect(tooltip.getText()).toContain('X-Men: First Class - Band of Brothers');
      });
  });
    // expect(
    //   await element(by.css('.next-collection-title')).getText()
    // ).toContain(
    //   'X-Men: First Class - Band of Brothers'
    // );


  // });
    // await browser.actions().mouseMove(element(by.css('.button-next-comic'))).perform().then(function() {
    //   browser.wait(EC.textToBePresentInElement($('.next-comic-title'), 'X-Men: First Class'), 5000);
    // }).then(function() {
    //   expect(
    //     element(by.css('.next-comic-title')).getText()
    //   ).toContain(
    //     'X-Men: First Class #2'
    //   );
    // });

    browser.actions().mouseMove(element(by.css('.button-next-comic'))).perform().then(() => {
      // perform another mousemove to try and trigger tooltip
      browser.actions().mouseMove({x: 5, y: 5}).perform();
      const tooltip = $('.next-comic-title');
      // wait for present AND visible
      const visible = EC.visibilityOf(tooltip);
      const present = EC.presenceOf(tooltip);
      browser.wait(EC.and(present, visible), 5000, 'Expected tooltip to appear').then(() => {
        expect(tooltip.getText()).toContain('X-Men: First Class #2');
      });
  });
   // await browser.wait(EC.textToBePresentInElement($('.next-comic-title'), 'X-Men: First Class'), 10000);
    // Waits for the element to contain the text



    // navigate forward and check the text updates
    await element(by.css('.button-next-comic')).click();

    expect(
      await element(by.css('.next-comic-title')).getText()
    ).toContain(
      'X-Men: First Class #3'
    );

    await element(by.css('.materialboxed')).click();

    expect(
      await element(by.css('.materialboxed.active')).getAttribute('src')
    ).toContain(
      'X-Men_First_Class_Vol_2_2'
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
