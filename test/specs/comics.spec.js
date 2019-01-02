describe('Comics', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });
  
  it('should create a comic thumbnail with the correct value, and open the expanded panel with the correct title', function() {
    const giantSizeThumbnail = $('.cover-thumbnail img[src*=Giant_Size_X-Men_Vol_1_1]');
    giantSizeThumbnail.waitForDisplayed();

    const giantSizeExpandLink = $('#expand-GiantSizeXMenVol11');
    giantSizeExpandLink.click();

    const giantSizeExpandedPanelTitle = $('div.series*=Giant Size X-Men #1');
    giantSizeExpandedPanelTitle.waitForDisplayed();
  });
});
