var assert = require('assert');

describe('Comics', function() {
   before(function() {
      browser.url('file://' + process.cwd() + '/index.html');
    });
  
   it('should create a comic thumbnail with the correct value', function() {
    browser.waitForVisible('ul.comics > li:nth-child(172) > div.comic.z-depth-5.hoverable > div > a > img');
    var firstThumbSrc = browser.getAttribute('ul.comics > li:nth-child(172) > div.comic.z-depth-5.hoverable > div > a > img', 'src');
    assert.equal(firstThumbSrc, 'https://www.spirton.com/images/comics/Giant_Size_X-Men_Vol_1_1.jpg');
   });

   it ('should open the expanded panel with the correct title', function() {
    browser.waitForVisible('ul.comics > li:nth-child(172) div.comic.z-depth-5.hoverable div img');
    browser.click('ul.comics > li:nth-child(172) div.comic.z-depth-5.hoverable div a');
    browser.waitForVisible('div.series*=Giant Size X-Men #1');
  });
});
