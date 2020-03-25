module.exports = {

    url: 'https://www.acehardware.com/',
   
    elements: {

        searchBar: { 
            selector: "//input[@title='Search Box']",
            locateStrategy: 'xpath'
        },
    Add_to_Cart: { 
            selector: "//button[@id='add-to-cart']",
            locateStrategy: 'xpath'
        },

    ViewCart_and_Checkout:{ 
        selector:"//button[text()='View Cart & Checkout']",
        locateStrategy: 'xpath'
    },
    decreaseQty:{ 
        selector:"//a[@data-mz-action='decreaseQty']",
        locateStrategy: 'xpath'
    },
    increaseQty:{ 
        selector:"//a[@data-mz-action='increaseQty']",
        locateStrategy: 'xpath'
    },
    updateQuantity:{ 
        selector:"//a[@data-mz-action='updateCart']",
        locateStrategy: 'xpath'
    },
    removeQuantity:{ 
        selector:"//a[@data-mz-action='removeItem']",
        locateStrategy: 'xpath'
    },

    ShippingMethod:{ 
        selector:"//a[@data-mz-action='removeItem']",
        locateStrategy: 'xpath'
    },
    StorePickup:{
        selector:"//label[@for='shipping_4e8581b914e44568943cab8700ee4a64_instore']",
        locateStrategy: 'xpath'
    },
    ShiptoHome:{
        selector:"//label[@for='shipping_4e8581b914e44568943cab8700ee4a64_shipHome']",
        locateStrategy: 'xpath'
    },


    }









}