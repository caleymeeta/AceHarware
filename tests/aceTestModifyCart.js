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
    'Modify Cart': browser => {
        ace
            .theOne()
        ace
            .waitForElementVisible("@cartIcon")
            .click("@cartIcon")
            .waitForElementVisible("@plusButton")
            .click('@plusButton')
            .click('@plusButton')
            .click('@firstPlusButton')
            .pause(1000)
            .click('@secondPlusButton')
            .click('@thirdPlusButton')
            .pause(1000)
            .waitForElementVisible("@removeButton")
            .click("@removeButton")
            .pause(2000)
            .waitForElementVisible("@checkoutButton")
            .click("@checkoutButton")
            .pause(90000)
    },
}
