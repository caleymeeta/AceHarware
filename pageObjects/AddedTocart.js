var AddedToCartcommands={

    Added_to_Cart:function(){
    
     this.waitForElementVisible('@verifyAdded_to_your_Cart', 20000)
     this.expect.element('@verifyAdded_to_your_Cart').to.be.present;
     this.click("@ViewCartCheckout")
     this.pause(5000)
    }

}




module.exports = {
  
    commands:[AddedToCartcommands],
  
  
   elements: {
    verifyAdded_to_your_Cart: { 
        selector: "//div[contains(text(),'Added to Your Cart')]",
        locateStrategy: 'xpath'

},
   ViewCartCheckout:{

    selector: "//button[@class='checkout modal-button']",
        locateStrategy: 'xpath'
   } 

},
}