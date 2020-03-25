var HomePageCommands = {
    searchProduct: function (productID) {
        this

            //.setValue("@searchField", '8065385')
            .setValue("@searchField", productID)
            .pause(3000)
            .click("@searchButton")
            .pause(3000)



    }


}


module.exports = {


    url: 'https://www.acehardware.com/',
    commands: [HomePageCommands],
    elements: {

        searchField: {
            selector: "//input[@title='Search Box']",
            locateStrategy: 'xpath'
        },


        searchButton: {
            selector: "//button[@type='submit']",
            locateStrategy: 'xpath'
        },

    }

}