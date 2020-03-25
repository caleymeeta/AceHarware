module.exports = {
    beforeEach: browser => {

        browser
            .url('https://www.acehardware.com/')
            .waitForElementVisible('body', 1000)
            .pause(2000)
    },

    "Test" : browser=>{
        browser.pause(1000)
    },

    after: browser => {
        browser
        .end()
      
        
    }
}