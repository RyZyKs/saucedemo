// LoginPage.js

class InventoryPage {
    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------

    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    //

    /**
     * This function enters user's name string into input.
     *
     * @param {string} username - The user's name.
     */
    checkIfPageIsOpened(): void {
      cy.get('#header_container > div.header_secondary_container > span').contains('Products').should('be.visible');
    }
}

export default new InventoryPage()
