import LoginPage from "./LoginPage";


class BurgerMenu {
    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    X_BUTTON = '[id="react-burger-cross-btn"]';
    ALL_ITEMS_LINK = '[id="inventory_sidebar_link"]';
    ABOUT_LINK = '[id="about_sidebar_link"]';
    LOGOUT_LINK = '[id="logout_sidebar_link"]';
    RESET_APP_STATE_LINK = '[id="reset_sidebar_link"]';


    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    //

    /**
     * This function enters user's name string into input.
     *
     * @param {string} username - The user's name.
     */
    logout(): void {
      cy.get(this.LOGOUT_LINK).click();
      LoginPage.checkIfPageIsOpened();
    }
}

export default new BurgerMenu()
