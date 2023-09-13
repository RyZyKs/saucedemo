/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      addProductToCart(productName: string): Chainable<void>;
      sortByNameAtoZ(): Chainable<void>;
      removeProductFromCart(productName: string): Chainable<void>;
    }
  }
}

import LoginPage from "./pageObjects/LoginPage";

Cypress.Commands.add("login", (username: string, password: string) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.submitLogin();
});

Cypress.Commands.add("addProductToCart", (productName: string) => {
  cy.get(`[data-test="add-to-cart-${productName}"]`).click();
  cy.get(`[data-test="remove-${productName}"]`).should("be.visible");
});

Cypress.Commands.add("removeProductFromCart", (productName: string) => {
    cy.get(`[data-test="remove-${productName}"]`).click();
    cy.get(`[data-test="add-to-cart-${productName}"]`).should("be.visible");
});

Cypress.Commands.add("sortByNameAtoZ", () => {
  cy.get('[data-test="product_sort_container"]')
    .should("be.visible")
    .and("contain", "Name (A to Z)")
    .select("Name (A to Z)");

  const productTable: string[] = [];
  const manuallySortedTable: string[] = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
    "Test.allTheThings() T-Shirt (Red)",
  ];

  // Extract product names and prices from the page and store as a table
  cy.get(".inventory_item")
    .each(($product) => {
      const productName = $product.find(".inventory_item_name").text().trim();

      // Push each product as a row in the table
      productTable.push(productName);
    })
    .then(() => {
      // Sort the product table by product name (first column) in ascending order
      const sortedTable = [...productTable].sort((a, b) =>
        a.localeCompare(b)
      );
      expect(sortedTable).to.deep.equal(manuallySortedTable);
      
      // for debugging
      const sortedTableString = sortedTable.join(", "); 
      const manuallySortedTableString = manuallySortedTable.join(", ");
      cy.log("Sorted Table: " + sortedTableString);
      cy.log("Manually Sorted Table: " + manuallySortedTableString);
    });
});
