let homepage = {}
let ProdPage = {}
let AddToYourCart = {}
let cartPage = {}



module.exports = {
    beforeEach: browser => {
        homepage = browser.page.HomePage()
        ProdPage = browser.page.productPage()
        AddToYourCart = browser.page.AddedTocart()
        cartPage = browser.page.CartPage()
        homepage
            .navigate()
            .waitForElementVisible('body', 1000)
    },

    after: browser => {
        homepage
            .end()
    },
    "searching product": browser => {



        homepage.searchProduct(8065385)
        ProdPage.Product_Price();
        ProdPage.addToCart()
        AddToYourCart.Added_to_Cart()
        homepage.searchProduct(3429263)
        ProdPage.Product_Price();
        ProdPage.addToCart()
        AddToYourCart.Added_to_Cart()
        cartPage.increaseQuantityOfProduct(1);
        cartPage.updateCart(1)
       // cartPage.removeCart(1)
        cartPage.updateCart(1)
       cartPage.increaseQuantityOfProduct(2);
       cartPage.updateCart(2)
       
       cartPage.increaseQuantityOfProduct(1);
       cartPage.updateCart(1)



     // cartPage.cartPagefunction()
      //cartPage.selectShippingMethod('shipToHome')







    }
}










