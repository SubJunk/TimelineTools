describe('Labels', function() {
  before(function() {
    console.log('1');
    this.timeout(200000);
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it('should create a label with the correct value', function() {
    browser.waitForVisible('#label-0*=Uncanny X-Men');
  });
});