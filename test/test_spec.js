var DuckSearch = require('../PageObjects/DuckSearchPage')

describe('Protractor demo', () => {
  var mainPage 

beforeEach(function(){
    
        browser.ignoreSynchronization = true
        browser.get('http://duckduckgo.com')

        mainPage = new DuckSearch()
})

    it('Should be simple test', function() {
    
        element(by.id('search_form_input_homepage')).sendKeys('Lorum ipsum')
        element(by.id('search_button_homepage')).click()

        expect(element(by.className('module__body js-about-item')).isPresent()).toBe(true)
        browser.sleep(5000)
    })
})