describe('Labels', function() {
  before(function() {
    this.timeout(200000);
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it('should create a label with the correct value', function() {
    browser.waitForVisible('#label-0*=Uncanny X-Men');
  });
});