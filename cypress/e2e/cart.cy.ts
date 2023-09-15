import InventoryPage from "../support/pageObjects/InventoryPage";
import CartPage from "../support/pageObjects/CartPage";
import burgerMenu from "../support/pageObjects/burgerMenu";

describe("Cart Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("users.json").then((users) => {
      const stdUser = users.stdUser;
      cy.login(stdUser.username, stdUser.password);
      InventoryPage.checkIfPageIsOpened();
    });
  });

  it("Add product to cart and check overview, then remove items", () => {
    cy.fixture("products.json").then((products) => {
      const backpack = products.backpack;
      const bikeLight = products.bikeLight;
      const boltShirt = products.boltShirt;
      const fleeceJacket = products.fleeceJacket;
      const onesie = products.onesie;
      const test = products.test;

      cy.addProductToCart(InventoryPage.BACKPACK);
      cy.addProductToCart(InventoryPage.BOLT_SHIRT);
      cy.addProductToCart(InventoryPage.ONESIE);
      cy.addProductToCart(InventoryPage.BIKE_LIGHT);
      cy.addProductToCart(InventoryPage.FLEECE_JACKET);
      cy.addProductToCart(InventoryPage.TEST_ALL);
      cy.get(InventoryPage.SHOPPING_CART_LINK).contains(6);
      InventoryPage.moveToCart();
      cy.checkIfProductIsListedOnTheList(backpack.name);
      cy.checkIfProductIsListedOnTheList(bikeLight.name);
      cy.checkIfProductIsListedOnTheList(boltShirt.name);
      cy.checkIfProductIsListedOnTheList(fleeceJacket.name);
      cy.checkIfProductIsListedOnTheList(onesie.name);
      cy.checkIfProductIsListedOnTheList(test.name);
      cy.removeProductFromCart(InventoryPage.BACKPACK, "cart");
      cy.removeProductFromCart(InventoryPage.BOLT_SHIRT, "cart");
      cy.removeProductFromCart(InventoryPage.ONESIE, "cart");
      cy.removeProductFromCart(InventoryPage.BIKE_LIGHT, "cart");
      cy.removeProductFromCart(InventoryPage.FLEECE_JACKET, "cart");
      cy.removeProductFromCart(InventoryPage.TEST_ALL, "cart");
    });
  });

  after(() => {
    burgerMenu.logout();
  });
});
