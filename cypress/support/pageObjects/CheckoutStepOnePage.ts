class CheckoutStepOnePage {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
  FIRSTNAME_INPUT = '[data-test="firstName"]';
  LASTNAME_INPUT = '[data-test="lastName"]';
  POSTALCODE = '[data-test="postalCode"]';
  CONTINUE_BUTTON = '[data-test="continue"]';
  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function fills up your information.
   *
   * @param {string} firstName - The product's name.
   * @param {string} lastName - The product's name.
   * @param {string} postalCode - The product's name.
   */
  fillUpyourInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').should("be.visible");
  }

  /**
   * This function moves user to checkout step two page.
   *
   */
  moveToCheckoutStepTwoPage() {
    cy.get(this.CONTINUE_BUTTON).should("be.visible").click({ force: true });
    cy.get(".title").should("be.visible").and("contain", "Checkout: Overview");
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-two.html");
  }
}

export default new CheckoutStepOnePage();