import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('ul.years li:nth-child(1) ul li:nth-child(1)')).getText() as Promise<string>;
  }
}
