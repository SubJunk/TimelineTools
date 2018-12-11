var assert = require('assert');

describe('Labels', function() {
  before(function() {
    this.timeout(200000);
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it('should create a series label with the correct value', function() {
    browser.waitForVisible('#label-0*=Uncanny X-Men');
  });

  it('should create a first year heading with the correct value', function() {
    browser.waitForVisible('ul.years > li:nth-child(1)');
    var firstYearText = browser.getText('ul.years > li:nth-child(1)');
    firstYearText = String(firstYearText);
    firstYearText = firstYearText.substring(0,4);
    assert.equal(firstYearText, '1975');
  });

  it('should create a first month heading with the correct value', function() {
    var assert = require('assert');
    browser.waitForVisible('ul.years li:nth-child(1) ul li:nth-child(1)');
    var firstMonthText = browser.getText('ul.years li:nth-child(1) ul li:nth-child(1)');
    assert.equal(firstMonthText, '5');
  });
});