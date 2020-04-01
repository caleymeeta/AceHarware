let ace = {}
module.exports = {
    before: browser => {
        ace = browser.page.acePage()
        ace
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    beforeEach: browse => {
        ace
        .theOne()
    }, 
    afterEach: browse => {
        ace
        .theOne()
    },
    'Signing In': browser => {
        // popUp(ace)
        var email = "charlespullen2000@gmail.com"
        var password = "Damondiadema17"
        ace
            .theOne()
        ace
            .click('@signIn')
            .pause(1000)
            .setValue('@emailInput', email)
            .setValue('@password', [password, browser.Keys.ENTER])
            .pause(1000)
    },
    // 'Searching ACE': browser => {
    //     ace
    //         .theOne()
    //     // browser.url("http://www.acehardware.com")
    //     // // browser.pause(2000) only enable if needed
    //     browser.element("css selector", "#acsFocusFirst", result => {
    //         if (result.status != -1) {
    //             console.log("Element exists");
    //             browser.click("#acsFocusFirst");
    //         } else {
    //             console.log("Element does not exist")
    //         }
    //         // console.log(result)
    //     })
    //     browser.setValue(".mz-searchbox-input", ["Traeger", browser.Keys.ENTER])
    //     browser.waitForElementVisible(".mz-pagetitle")
    //     browser.assert.containsText(".mz-pagetitle", "Traeger")
    //     browser.clearValue(".mz-searchbox-input")
    //     browser.setValue(".mz-searchbox-input", ["Hammer", browser.Keys.ENTER])
    //     browser.waitForElementVisible(".mz-pagetitle")
    //     browser.assert.containsText(".mz-pagetitle", "Hammer")
    //     browser.clearValue(".mz-searchbox-input")
    // },
    // 'Store locator function': browser => {
    //     var address = "Ogden" 
    //     ace 
    //     .click('@storeLocator')
    //     .waitForElementVisible('@inputMapBar')
    //     .pause(1000)
    //     .theOne()
    //     .setValue('@inputMapBar', address)
    //     .click('@mapSearchButton')
    //     .waitForElementPresent('@makeMyStoreButton', 10000)
    //     .click('@makeMyStoreButton')
    //     .pause(1000)
        
    // },
    'Searching Ace': browser => {
        ace
            .theOne()
            browser.setValue(".mz-searchbox-input", ["Traeger", browser.Keys.ENTER])
            browser.waitForElementVisible(".mz-pagetitle")
            browser.assert.containsText(".mz-pagetitle", "Traeger")
            ace
            .click('@image1')
            .theOne()
            ace
            .click('@addToCart')
            .theOne()
            .click('@continueShopping')
            .pause(1000) 
            
            //Wood Chips  
            .setValue(".mz-searchbox-input", ["Wood Chips", browser.Keys.ENTER]) 
            ace
            .click('@image1')
            .theOne() 
            ace
            .waitForElementVisible('@addToCart')
            .click('@addToCart')
            .theOne() 
            .click('@continueShopping')
            .pause(1000) 

            //Fire fluid 
            .setValue(".mz-searchbox-input", ["Fire fluid", browser.Keys.ENTER]) 
            ace
            .click('@image1')
            .theOne() 
            ace
            .waitForElementVisible('@addToCart')
            .click('@addToCart')
            .theOne() 
            .click('@continueShopping')
            .pause(1000) 

             //Lighter 
             .setValue(".mz-searchbox-input", ["Lighter", browser.Keys.ENTER]) 
             ace
             .click('@image1')
             .theOne() 
             ace
             .waitForElementVisible('@addToCart')
             .click('@addToCart')
             .theOne() 
             .click('@continueShopping')
             .pause(1000) 
              
             //Grill
             .setValue(".mz-searchbox-input", ["Grill", browser.Keys.ENTER]) 
             ace
             .click('@image1')
             .theOne() 
             ace
             .waitForElementVisible('@addToCart')
             .click('@addToCart')
             .theOne() 
             .click('@continueShopping')
             .pause(1000) 

    },
    // 'adding to cart': browser => {
    //     ace
    //     .theOne()
    //     .click('@image1')
    //     // .waitForElementVisible('@addToCart')
    //     .pause(1000)
    //     .click('@addToCart')
    //     //.click('@continueShoppingAfterAddingToCart')
    //     .click('@cartIcon')
    //     // .pause()
    // },
    'add quantity': browser => {
       
        for (let i = 0; i < 10; i++) {
        ace
        .click('@plusButton')
       
        }
    },
    'update': browser => {
        ace
       .click('@updateButton')
       .pause(3000)
       
        
    },
}
