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
   * This function moves user to checkout step one page.
   *
   */
  moveToCheckoutStepOnePage() {
    cy.get(this.CHECKOUT_BUTTON).should("be.visible").and("contain", "Checkout").click({ force: true });
    cy.get(".title").should("be.visible").and("contain", "Checkout: Your Information");
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html");
  }
}

export default new CartPage();