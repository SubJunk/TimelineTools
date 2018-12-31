describe('Collections', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html#!?showCollections=1');
  });

  it('should create a collection image with the correct value', function() {
    const secondGenesisCollectionThumbnail = $('.collections img[src*=X-Men_Epic_Collection_Vol_5_Second_Genesis]');
    secondGenesisCollectionThumbnail.waitForVisible();
  });
});
