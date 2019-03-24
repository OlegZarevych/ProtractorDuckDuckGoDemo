describe('Protractor demo', () => {
  
    it('Should be simple test', function() {
        browser.ignoreSynchronization = true
        browser.get('http://duckduckgo.com')

        browser.sleep(5000)
    })
})