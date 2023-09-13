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

  it("Add all products to the cart", () => {
    cy.addProductToCart(InventoryPage.BACKPACK);
    cy.addProductToCart(InventoryPage.BOLT_SHIRT);
    cy.addProductToCart(InventoryPage.ONESIE);
    cy.addProductToCart(InventoryPage.BIKE_LIGHT);
    cy.addProductToCart(InventoryPage.FLEECE_JACKET);
    cy.addProductToCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(6);
  });

  it("Remove all products from the cart", () => {
    cy.addProductToCart(InventoryPage.BACKPACK);
    cy.addProductToCart(InventoryPage.BOLT_SHIRT);
    cy.addProductToCart(InventoryPage.ONESIE);
    cy.addProductToCart(InventoryPage.BIKE_LIGHT);
    cy.addProductToCart(InventoryPage.FLEECE_JACKET);
    cy.addProductToCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(6);
    cy.removeProductFromCart(InventoryPage.BACKPACK);
    cy.removeProductFromCart(InventoryPage.BOLT_SHIRT);
    cy.removeProductFromCart(InventoryPage.ONESIE);
    cy.removeProductFromCart(InventoryPage.BIKE_LIGHT);
    cy.removeProductFromCart(InventoryPage.FLEECE_JACKET);
    cy.removeProductFromCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).should('have.text', '');
  });

  it("Sort products alphabetically", () => {
    cy.sortByNameAtoZ();
  });

  it("Add products, sort (AtoZ) and then remove", () => {
    cy.addProductToCart(InventoryPage.BACKPACK);
    cy.addProductToCart(InventoryPage.BOLT_SHIRT);
    cy.addProductToCart(InventoryPage.ONESIE);
    cy.sortByNameAtoZ();
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(3);
    cy.removeProductFromCart(InventoryPage.BACKPACK);
    cy.removeProductFromCart(InventoryPage.BOLT_SHIRT);
    cy.removeProductFromCart(InventoryPage.ONESIE);

    cy.get(InventoryPage.SHOPPING_CART_LINK).should('have.text', '');
  });

  it("Sort products and add to cart the last one", () => {
    cy.sortByNameAtoZ();
    cy.addProductToCart(InventoryPage.TEST_ALL);
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(1);
  });

  it("Add products to cart and logout from the app", () => {
    cy.addProductToCart(InventoryPage.ONESIE);
    cy.get(InventoryPage.BURGER_MENU_DROPDOWN).click();
    cy.get(InventoryPage.SHOPPING_CART_LINK).contains(1);
    burgerMenu.logout();
  });
});
