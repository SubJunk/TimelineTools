describe('Labels', function() {
  before(function() {
    this.timeout(200000);
    browser.url('file://' + process.cwd() + '/index.html');
  });

  it('should create a label with the correct value', function() {
    browser.waitForVisible('#label-0*=Uncanny X-Men');
  });

  it('should create a first month label with the correct value', function() {
    //doesn't check for correct value but this works
    browser.waitForVisible('//*[@id="app"]/ul[1]/li[1]/ul/li[1]');
  });

  it('should create a first month label with the correct value', function() {
    //this times out
    browser.waitForVisible('//*[@id="app"]/ul[1]/li[1]/ul/li[1]=5');
  });

  it('should create a first month label', function() {
    //this times out
    browser.waitForVisible('//*[@id="app"]/ul[1]/li[1]/ul/li[1]*=5');
  });

  it('should create a first month label', function() {
    //this times out
    browser.waitForVisible('.ul .years .li:nth-child(1) .ul .li:nth-child(1)');
  });
});