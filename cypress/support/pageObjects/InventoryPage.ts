// LoginPage.js

class InventoryPage {
    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    BURGER_MENU_DROPDOWN = '[id="react-burger-menu-btn"]';
    PAGE_HEADER = '.app_logo';
    SCND_HEADER = '#header_container > div.header_secondary_container > span'
    SHOPPING_CART_LINK = '[id="shopping_cart_container"]';
    SORT_DROPDOWN = '[data-test="product_sort_container"]';
    //--------------------------------------------------------
    // Products add to cart buttons.
    //--------------------------------------------------------
    BACKPACK = 'sauce-labs-backpack';
    BOLT_SHIRT = 'sauce-labs-bolt-t-shirt';
    ONESIE = 'sauce-labs-onesie';
    BIKE_LIGHT = 'sauce-labs-bike-light';
    FLEECE_JACKET = 'sauce-labs-fleece-jacket';
    TEST_ALL = 'test.allthethings()-t-shirt-(red)';
    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    //

    /**
     * This function checks if the page is opened.
     *
     * @param {string} username - The user's name.
     */
    checkIfPageIsOpened(): void {
      cy.get(this.SCND_HEADER).contains('Products').should('be.visible');
    }
}

export default new InventoryPage()
