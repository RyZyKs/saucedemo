class InventoryPage {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
  BURGER_MENU_DROPDOWN = "#react-burger-menu-btn";
  PAGE_HEADER = ".app_logo";
  SCND_HEADER = "#header_container > div.header_secondary_container > span";
  SHOPPING_CART_LINK = "#shopping_cart_container";
  SORT_DROPDOWN = '[data-test="product_sort_container"]';
  //--------------------------------------------------------
  // Products add to cart buttons.
  //--------------------------------------------------------
  BACKPACK = "sauce-labs-backpack";
  BOLT_SHIRT = "sauce-labs-bolt-t-shirt";
  ONESIE = "sauce-labs-onesie";
  BIKE_LIGHT = "sauce-labs-bike-light";
  FLEECE_JACKET = "sauce-labs-fleece-jacket";
  TEST_ALL = "test.allthethings()-t-shirt-(red)";
  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function checks if the page is opened.
   */
  checkIfPageIsOpened() {
    cy.get(this.SCND_HEADER).contains("Products").should("be.visible");
  }

  /**
   * This function sorts the products form A to Z and then validate if it's sorted correctly.
   */
  sortByNameAtoZ () {
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
  
    cy.get(".inventory_item")
      .each(($product) => {
        const productName = $product.find(".inventory_item_name").text().trim();
  
        productTable.push(productName);
      })
      .then(() => {
        const sortedTable = [...productTable].sort((a, b) => a.localeCompare(b));
        expect(sortedTable).to.deep.equal(manuallySortedTable);
  
        // for debugging
        const sortedTableString = sortedTable.join(", ");
        const manuallySortedTableString = manuallySortedTable.join(", ");
        cy.log("Sorted Table: " + sortedTableString);
        cy.log("Manually Sorted Table: " + manuallySortedTableString);
      });
  };
}

export default new InventoryPage();