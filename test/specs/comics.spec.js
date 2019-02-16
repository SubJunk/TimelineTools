describe('Comics', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });
  
  it.only(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic',
  function() {
    const giantSizeThumbnail = $('.cover-thumbnail img[src*=Uncanny_X-Men_Vol_1_2]');
    giantSizeThumbnail.waitForDisplayed();

    const giantSizeExpandLink = $('#expand-UncannyXMenVol12');
    giantSizeExpandLink.click();

    const giantSizeExpandedPanelTitle = $('div.series*=Uncanny X-Men #2');
    giantSizeExpandedPanelTitle.waitForDisplayed();

    const nextComicBtn = $('.button-next-comic');
    nextComicBtn.waitForDisplayed();
    nextComicBtn.click();

    const nextExpandedPanelTitle = $('div.series*=Uncanny X-Men #3');
    nextExpandedPanelTitle.waitForDisplayed();
  });
});
