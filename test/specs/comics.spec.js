describe('Comics', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });
  
  it('should create a comic thumbnail with the correct value, and open the expanded panel with the correct title', function() {
    const giantSizeThumbnail = $('.cover-thumbnail img[src*=Uncanny_X-Men_Vol_1_2]');
    giantSizeThumbnail.waitForDisplayed();

    const giantSizeExpandLink = $('#expand-UncannyXMenVol12');
    giantSizeExpandLink.click();

    const giantSizeExpandedPanelTitle = $('div.series*=Uncanny X-Men #2');
    giantSizeExpandedPanelTitle.waitForDisplayed();
  });
});
