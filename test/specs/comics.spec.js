var assert = require('assert');

describe('Comics', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });
  
  it('should create a comic thumbnail with the correct value', function() {
    browser.waitForVisible('.cover-thumbnail img[src*=Giant_Size_X-Men_Vol_1_1]');
  });

  it('should open the expanded panel with the correct title', function() {
    browser.waitForVisible('.cover-thumbnail img[src*=Giant_Size_X-Men_Vol_1_1]');
    browser.click('.cover-thumbnail img[src*=Giant_Size_X-Men_Vol_1_1]');
    browser.waitForVisible('div.series*=Giant Size X-Men #1');
  });
});
