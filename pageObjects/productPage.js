var ProductPageCommands = {

    addToCart: function () {
        this
            .waitForElementVisible('@Add_to_Cart', 50000)
            .click("@Add_to_Cart")
            .pause(10000)


    },
    Product_Price: function () {
        this
        .getText('@Product_Price', function (resultPrice) {
        //.getText(self.itemPrice, function (resultPrice) {

            console.log("The price of product is " + resultPrice.value)
        })


    }

}



module.exports = {
    commands:[ProductPageCommands],
    

    elements: {
        decreaseQty: {
            selector: "//a[@data-mz-action='decreaseQty']",
            locateStrategy: 'xpath'
        },
        increaseQty: {
            selector: "//a[@data-mz-action='increaseQty']",
            locateStrategy: 'xpath'
        },
        Add_to_Cart: {
            selector: "(//button[@id='add-to-cart'])[2]",
            locateStrategy: 'xpath'
        },
        Product_Price: {
            selector: "(//span[@class='mz-price'])[2]",
            locateStrategy: 'xpath'
        }
       

    }
}