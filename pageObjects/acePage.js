var popUp = {
    theOne: function () {
        this
            .useCss()
        this.api.element("css selector", "#acsFocusFirst", result => {
            if (result.status != -1) {
                console.log("Element really did exist but i killed it :)");
                this.click("#acsFocusFirst");
            } else {
                console.log("Thankfully the Element does not exist")
            }
        })
        return this
    },
}
module.exports = {
    url: 'https://www.acehardware.com',
    commands: [popUp],
    elements: {
        searchBar: 'span[class="mz-searchbox-field"]',
        searchBarXpath: {
            selector: '//input[@class="mz-searchbox-input show-placeholder"]',
            locateStrategy: 'xpath'
        },
        homeButton: {
            selector: '//div[@class="mz-storebranding"]',
            locateStrategy: 'xpath'
        },
        closePopUp: {
            selector: '//a[@id="acsFocusFirst"]',
            locateStrategy: 'xpath'
        },
        signIn: {
            selector: '(//div[@class="login-link"])[1]',
            locateStrategy: 'xpath'
        },
        emailInput: {
            selector: '//input[@id="signin-emailAddress"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//input[@id="signin-password"]',
            locateStrategy: 'xpath'
        },
        image1: {
            selector: '(//div[@class="mz-productlisting-image"])[1]',
            locateStrategy: 'xpath'
        },
        grillImage1: {
            selector: '(//div[@class="image-container"])[1]',
            locateStrategy: 'xpath'
        }, 
        addToCart: {
            selector: '(//button[@id="add-to-cart"])[2]',
            locateStrategy: 'xpath'
        },
        cartIcon: {
            selector: '//div[@class="cart-header"]',
            locateStrategy: 'xpath'
        },
        minusButton: {
            selector: '(//a[@class="mz-carttable-qty-button"])[1]',
            locateStrategy: 'xpath'
        },
        plusButton: {
            selector: '(//a[@class="mz-carttable-qty-button"])[2]',
            locateStrategy: 'xpath'
        },
        updateButton: {
            selector: '//a[@class="mz-carttable-qty-update"]',
            locateStrategy: 'xpath'
        },
        continueShopping: {
            selector: '(//button[@data-mz-action])[4]',
            locateStrategy: 'xpath'
        },
        storeLocator: {
            selector: '(//li[@class="mz-utilitynav-item"])[1]',
            locateStrategy:'xpath'
        },
        inputMapBar: {
            selector: '//input[@id="mapsearch"]',
            locateStrategy: 'xpath'
        },
        mapSearchButton: {
            selector: '//button[@id="mapsearchbtn"]',
            locateStrategy: 'xpath'
        },
        mapOption: {
            selector: '//div[@class="item row"]',
            locateStrategy: 'xpath'
        },
        firstMapOption: {
            selector: '(//div[@class="item row"])[2]',
            locateStrategy: 'xpath'
        },
        makeMyStoreButton: {
            selector: '(//button[@class="aceRed"])[3]',
            locateStrategy: 'xpath'
        },
        firstPlusButton: {
            selector: '(//a[@class="mz-carttable-qty-button"])[2]',
            locateStrategy: 'xpath'
        },
        secondPlusButton: {
            selector: '(//a[@class="mz-carttable-qty-button"])[4]',
            locateStrategy: 'xpath'
        },
        thirdPlusButton: {
            selector: '(//a[@class="mz-carttable-qty-button"])[6]',
            locateStrategy: 'xpath'
        },
        removeButton: {
            selector: '(//a[@class="mz-carttable-qty-remove"])[3]',
            locateStrategy: 'xpath'
        },
        checkoutButton: {
            selector: '(//button[@class="cart-checkout mz-button mz-button-large show-loading-animation "])[1]',
            locateStrategy: 'xpath'
        },
        
       
    }
}

