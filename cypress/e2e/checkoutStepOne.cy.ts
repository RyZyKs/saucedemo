import InventoryPage from "../support/pageObjects/InventoryPage";
import CartPage from "../support/pageObjects/CartPage";
import burgerMenu from "../support/pageObjects/burgerMenu";
import CheckoutStepOnePage from "../support/pageObjects/CheckoutStepOnePage";

describe("Checkout Step One Suite", () => {
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
  
      cy.addProductToCart(InventoryPage.BACKPACK);
      cy.addProductToCart(InventoryPage.BIKE_LIGHT);
      InventoryPage.moveToCart();
      cy.checkIfProductIsListedOnTheList(backpack.name);
      cy.checkIfProductIsListedOnTheList(bikeLight.name);
      CartPage.moveToCheckoutStepOnePage();
      CheckoutStepOnePage.fillUpyourInformation('Przemek', 'Gierada', '30-606');
    });
  });

  after(() => {
    burgerMenu.logout();
  });
});