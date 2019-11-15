/* jshint -W117 */
describe('E2E Login', function () {
    beforeEach(function() {
      browser.get('/');
    });
  
    it('should have home button active', function() {
      var title = element(by.css('.form-title'));
      expect(title.getText()).toBe('Login');
    });
});