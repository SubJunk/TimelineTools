describe('Collections', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html#!?showCollections=1');
  });

  it(
    'should have a collection image with the correct value\n' +
    'and expand to show its contents\n' +
    'and open the collection in the timeline when a comic is clicked',
  function() {
    const secondGenesisCollectionThumbnail = $('.collections img[src*=X-Men_Epic_Collection_Vol_5_Second_Genesis]');
    secondGenesisCollectionThumbnail.waitForDisplayed();
    secondGenesisCollectionThumbnail.click();

    const uncannyIssue1ThumbnailCollections = $('.comic-collection img[src*=Uncanny_X-Men_Vol_1_1]');
    uncannyIssue1ThumbnailCollections.waitForDisplayed();

    const uncannyIssue1ThumbnailTimeline = $('.comic .expanded-panel img[src*=Uncanny_X-Men_Vol_1_1]');
    uncannyIssue1ThumbnailTimeline.waitForDisplayed();
  });
});
