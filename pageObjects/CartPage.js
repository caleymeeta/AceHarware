var CartPageCommands = {
    selectShippingMethod: function (homeOrstore) {
        let self = this;
        switch (homeOrstore) {
            case "storePickup":
                this.pause(3000)
                    .click('@StorePickup')
                    .pause(2000)
                    .assert.elementPresent("@verify_freeStorePickup")

                break;
            case "shipToHome":
                this.click('@ShiptoHome')
                    .pause(10000)
                    .assert.not.elementPresent("@verify_freeStorePickup")

                break;
            default:
        }

    },
    increaseQuantityOfProduct: function (productLocation) {
        //  this.click('@cartTableQuantityIncrease')
        this.api.useXpath()
            //.click(this.getQuantityIncreaseByItemNumber(productLocation))
            .click(`//tbody[@class='mz-table-cart-items']/tr[${productLocation}]//a[@data-mz-action='increaseQty']`)
            .useCss()
            .pause(5000)
    },  
    getQuantityIncreaseByItemNumber: function(num){
        return `//tbody[@class='mz-table-cart-items']/tr[${num}]//a[@data-mz-action='increaseQty']`
    
    },  
    updateCart: function (productLocation) {
        //  this.click('@cartTableQuantityIncrease')
        this.api.useXpath()
            //.click(this.getQuantityIncreaseByItemNumber(productLocation))
            .click(`//table[@class='mz-table mz-table-cart  ']//tr[${productLocation}]//a[@class='mz-carttable-qty-update']`)
            .useCss()
            .pause(5000)
    },  
    removeCart: function (productLocation) {
        //  this.click('@cartTableQuantityIncrease')
        this.api.useXpath()
            //.click(this.getQuantityIncreaseByItemNumber(productLocation))
            .click(`//tbody[@class='mz-table-cart-items']/tr[${productLocation}]//a[@class='mz-carttable-qty-remove']`)
            .useCss()
            .pause(5000)
    },  

    cartPagefunction: function () {
        let self = this;
        var itemPrice
        var totalPrice
        var increasedTotalPrice
        var expectedTotalPrice
        var MerchandiseTotal
        var OrderTotal


        this
            .getText('@itemPrice', function (resultPrice) {

                itemPrice = resultPrice.value.replace("$", "")
            })
            //.getText('@totalPrice', function (resultTotalPrice) {
            .getText('@totalPrice', function (resultTotalPrice) {

                totalPrice = resultTotalPrice.value.replace("$", "")
                expectedTotalPrice = itemPrice * 2
                MerchandiseTotal = expectedTotalPrice
                OrderTotal = expectedTotalPrice

                console.log("The item price is " + itemPrice)
                console.log("The total price is " + totalPrice)
                console.log("The expectedTotalPrice is " + expectedTotalPrice)



            })
        this.click("@increaseQty")
        this.click("@updateQuantity")
        this.pause(4000)

        this.getText('@totalPrice', function (resultIncreasedTotalPrice) {

            console.log("The increased total price is " + resultIncreasedTotalPrice.value)

        })
        this.perform(function () {

            self.assert.containsText('@totalPrice', expectedTotalPrice)
            console.log("The expectedTotalPrice is " + expectedTotalPrice)


            self.assert.containsText('@MerchandiseSubtotal', MerchandiseTotal)
            console.log("The @MerchandiseSubtotal is " + MerchandiseTotal)


            self.assert.containsText('@Order_Total', OrderTotal)
            console.log("The OrderTotal is " + OrderTotal)

            self.assert.containsText('@cartIcon_Quantity', "2")
            self.assert.containsText('@cartIcon_Price', expectedTotalPrice)


        })
    }
}

module.exports = {
    commands: [CartPageCommands],

    elements: {

        itemPrice: {
            selector: "//td[@class='mz-carttable-item-price']/div[@class='currency']",
            locateStrategy: 'xpath'
        },


        totalPrice: {
            selector: "//td[@class='mz-carttable-item-total']/div[@class='currency']",
            locateStrategy: 'xpath'
        },
        decreaseQty: {
            selector: "//a[@data-mz-action='decreaseQty']",
            locateStrategy: 'xpath'
        },
        increaseQty: {
            selector: "//a[@data-mz-action='increaseQty']",
            locateStrategy: 'xpath'
        },
        updateQuantity: {
            selector: "//a[@data-mz-action='updateCart']",
            locateStrategy: 'xpath'
        },
        MerchandiseSubtotal: {
            selector: "//div[contains(text(),'Merchandise Subtotal')]/following-sibling::div",
            locateStrategy: 'xpath'
        },
        Order_Total: {
            selector: "(//span[@class='cart-footer-pricing-total'])[2]",
            locateStrategy: 'xpath'

        },
        cartIcon_Quantity: {
            selector: "(//span[@class='cartCount']/b)[2]",
            locateStrategy: 'xpath'

        },
        cartIcon_Price: {
            selector: "(//span[@class='cartItems'])[2]",
            locateStrategy: 'xpath'

        },
        ShippingMethod: {
            selector: "//a[@data-mz-action='removeItem']",
            locateStrategy: 'xpath'
        },
        StorePickup: {
            selector: "//input[contains(@for,'_instore')]",
            locateStrategy: 'xpath'
        },
        ShiptoHome: {
            selector: "//label[contains(@for,'_shipHome')]",
            locateStrategy: 'xpath'
        },
        verify_freeStorePickup: {
            selector: "//span[contains(text(),'Free Store Pickup')]",
            locateStrategy: 'xpath'



        }
        

    }
}





