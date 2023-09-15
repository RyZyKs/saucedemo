class CheckoutStepTwoPage {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
  FINISH_BUTTON = '[data-test="finish"]';
  
  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function moves user to checkout complete page.
   *
   */
  moveToCheckoutCompletePage() {
    cy.get(this.FINISH_BUTTON).should("be.visible").click({ force: true });
    cy.get(".title").should("be.visible").and("contain", 'Checkout: Complete!');
    cy.url().should("eq", 'https://www.saucedemo.com/checkout-complete.html');
  }
}

export default new CheckoutStepTwoPage();