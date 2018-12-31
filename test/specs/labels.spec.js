const assert = require('assert');

describe('Labels', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it('should create a series label with the correct value', function() {
    const uncannyLabel = $('#label-0*=Uncanny X-Men');
    uncannyLabel.waitForVisible();
  });

  it('should create a first year heading with the correct value', function() {
    const firstYear = $('ul.years > li:nth-child(1)');
    firstYear.waitForVisible();
    assert(firstYear.getText().indexOf('1975') > -1);
  });

  it('should create a first month heading with the correct value', function() {
    const firstMonth = $('ul.years li:nth-child(1) ul li:nth-child(1)');
    firstMonth.waitForVisible();
    assert.equal(firstMonthText.getText(), '5');
  });
});