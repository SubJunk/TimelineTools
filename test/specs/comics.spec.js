describe('Comics', function() {
  before(function() {
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it(
    'should create a comic thumbnail with the correct value\n' +
    'should open the expanded panel with the correct title\n' +
    'should use the arrow button to go to the next comic',
  function() {
    const preloadedThumbnails = $('#pre-app');
    // This confusing syntax means wait for it to NOT be displayed
    preloadedThumbnails.waitForDisplayed(500, true);

    const giantSizeThumbnail = $('.cover-thumbnail img[src*=Uncanny_X-Men_Vol_1_5]');
    giantSizeThumbnail.waitForDisplayed();

    const giantSizeExpandLink = $('#expand-UncannyXMenVol15');
    giantSizeExpandLink.click();

    const giantSizeExpandedPanelTitle = $('div.series*=Uncanny X-Men #5');
    giantSizeExpandedPanelTitle.waitForDisplayed();

    const nextComicBtn = $('.button-next-comic');
    nextComicBtn.waitForDisplayed();
    nextComicBtn.click();

    const nextExpandedPanelTitle = $('div.series*=Uncanny X-Men #6');
    nextExpandedPanelTitle.waitForDisplayed();
  });
});
