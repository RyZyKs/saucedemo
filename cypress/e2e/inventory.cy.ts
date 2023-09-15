import InventoryPage from "../support/pageObjects/InventoryPage";
import burgerMenu from "../support/pageObjects/burgerMenu";

describe("Inventory Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("users.json").then((users) => {
      const stdUser = users.stdUser;
      cy.login(stdUser.username, stdUser.password);
      InventoryPage.checkIfPageIsOpened();
    });
  });

  it("Add and remove all products from the cart", () => {
    cy.addProductToCart(InventoryPage.BACKPACK);
    cy.addProductToCart(InventoryPage.BOLT_SHIRT);
    cy.addProductToCart(InventoryPage.ONESIE);
    cy.addProductToCart(InventoryPage.BIKE_LIGHT);
    cy.addProductToCart(InventoryPage.FLEECE_JACKET);
    cy.addProductToCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(6);
    cy.removeProductFromCart(InventoryPage.BACKPACK, "inventory");
    cy.removeProductFromCart(InventoryPage.BOLT_SHIRT, "inventory");
    cy.removeProductFromCart(InventoryPage.ONESIE, "inventory");
    cy.removeProductFromCart(InventoryPage.BIKE_LIGHT, "inventory");
    cy.removeProductFromCart(InventoryPage.FLEECE_JACKET, "inventory");
    cy.removeProductFromCart(InventoryPage.TEST_ALL, "inventory");
    cy.get(InventoryPage.SHOPPING_CART_LINK).should("have.text", "");
  });

  it("Sort products alphabetically", () => {
    InventoryPage.sortByNameAtoZ();
  });

  it("Sort products and add to cart the last one", () => {
    InventoryPage.sortByNameAtoZ();
    cy.addProductToCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(1);
  });

  after(() => {
    burgerMenu.logout();
  });
});
