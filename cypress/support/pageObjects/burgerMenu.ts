import LoginPage from "./LoginPage";

class BurgerMenu {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
  X_BUTTON = "#eact-burger-cross-btn";
  ALL_ITEMS_LINK = "#inventory_sidebar_link";
  ABOUT_LINK = "#about_sidebar_link";
  LOGOUT_LINK = "#logout_sidebar_link";
  RESET_APP_STATE_LINK = "#reset_sidebar_link";

  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function logs out the user.
   */
  logout(): void {
    cy.get(this.LOGOUT_LINK).click();
    LoginPage.checkIfPageIsOpened();
  }
}

export default new BurgerMenu();
