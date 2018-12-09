var assert = require('assert');

describe('Collections', function() {
    before(function() {
       browser.url('file://' + process.cwd() + '/index.html');
     });

    it('should create a collection image with the correct value', function() {
     browser.waitForVisible('div.fixed-action-btn.direction-left a');
     browser.click('a.btn-floating btn-large red');
     browser.click('div.fixed-action-btn.direction-left ul li:nth-child(1) a');
     browser.waitForVisible('ul.collections li:nth-child(1)');
     var firstCollectionSrc = browser.getAttribute('ul.collections.ng-scope li:nth-child(1) div div.panel-left a img', 'src');
     assert.equal(firstCollectionSrc, 'https://www.spirton.com/images/comics/X-Men_Epic_Collection_Vol_5_Second_Genesis.jpg');
    });
});
