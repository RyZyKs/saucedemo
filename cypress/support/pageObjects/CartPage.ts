class CartPage {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
    CHECKOUT_BUTTON = '[data-test="checkout"]';
  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function checks if the specific product aimed by parameter is on the cart list.
   *
   * @param {string} product - The product's name.
   */
  checkIfProductIsListedOnTheList(product: string) {
    cy.get(".inventory_item_name").should("be.visible").and("contain", product);
  }

  /**
   * This function moves user to checkout step one page.
   *
   * @param {string} product - The product's name.
   */
  moveToCheckoutStepOnePage(product: string) {
    cy.get(this.CHECKOUT_BUTTON)
      .should("be.visible")
      .and("contain", "Checkout")
      .click({ force: true });

    cy.get(".title")
      .should("be.visible")
      .and("contain", "Checkout: Your Information");

    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html");
  }
}

export default new CartPage();
