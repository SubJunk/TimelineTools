var assert = require('assert');

describe('Collections', function() {
    before(function() {
        browser.url('file://' + process.cwd() + '/index.html#!?showCollections=1');
    });

    it('should create a collection image with the correct value', function() {
     browser.waitForVisible('ul.collections > li:nth-child(1) div > div.panel-left');
     var firstCollectionSrc = browser.getAttribute('ul.collections li:nth-child(1) div div.panel-left a img', 'src');
     assert.equal(firstCollectionSrc, 'https://www.spirton.com/images/comics/X-Men_Epic_Collection_Vol_5_Second_Genesis.jpg');
    });
});
