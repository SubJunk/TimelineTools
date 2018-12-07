describe('Comics', function() {
   before(function() {
      browser.url('file://' + process.cwd() + '/index.html');
    });
  
   it('should create a comic thumbnail with the correct value', function() {
    //this does not work
     browser.waitForVisible('//*[@id="app"]/ul[2]/li[172]/div[3]/div[1]/a/img.src*=Giant_Size_X-Men_Vol_1_1.jpg'); 
   });
});

  //timeout error 
  //Timeout of 10000ms exceeded. 
  //Try to reduce the run time or increase your timeout for test specs 
  //(http://webdriver.io/guide/testrunner/timeouts.html); 
  //if returning a Promise, ensure it resolves. (/Users/paulenec/TimelineTools2/test/specs/labels.spec.js)