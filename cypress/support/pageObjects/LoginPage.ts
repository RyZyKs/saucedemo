// LoginPage.js

class LoginPage {
    //--------------------------------------------------------
    // Locators.
    //--------------------------------------------------------
    USER_NAME_INPUT = '[data-test="username"]';
    PASSWORD_INPUT = '[data-test="password"]';
    LOGIN_BUTTON = '[data-test="login-button"]';
    ERROR_HINT = '[data-test="error"]';

    //--------------------------------------------------------
    // Error strings.
    //--------------------------------------------------------
    lockedUserError = "Epic sadface: Sorry, this user has been locked out.";
    nonExistingUserError = "Epic sadface: Username and password do not match any user in this service";


    //--------------------------------------------------------
    // Functions.
    //--------------------------------------------------------
    //

    /**
     * This function enters user's name string into input.
     *
     * @param {string} username - The user's name.
     */
    enterUsername(username: string): void {
      cy.get(this.USER_NAME_INPUT).type(username);
    }

    /**
     * This function enters user's password string into input.
     *
     * @param {string} password - The user's password.
     */
    enterPassword(password: string): void {
      cy.get(this.PASSWORD_INPUT).type(password);
    }
  
    /**
     * This function clicks the login button.
     */
    submitLogin(): void {
      cy.get(this.LOGIN_BUTTON).click()
    }
}

export default new LoginPage()
