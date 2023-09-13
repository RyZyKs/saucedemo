import InventoryPage from "../support/pageObjects/InventoryPage";
import LoginPage from "../support/pageObjects/LoginPage";

describe('Login Test Suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Log in with correct credentials', () => {
    cy.fixture('users.json').then((users) => {
      const stdUser = users.stdUser;
      cy.login(stdUser.username,stdUser.password);
      InventoryPage.checkIfPageIsOpened();
    });
  });

  it('Log in with locked user', () => {
    cy.fixture('users.json').then((users) => {
      const lockedUser = users.lockedUser;
      cy.login(lockedUser.username,lockedUser.password);
      cy.get(LoginPage.ERROR_HINT).should('be.visible').contains(LoginPage.lockedUserError);
    });
  });

  it('Log in with non existing user', () => {
    cy.fixture('users.json').then((users) => {
      const nonExisitngUser = users.nonExisitngUser;
      cy.login(nonExisitngUser.username,nonExisitngUser.password);
      cy.get(LoginPage.ERROR_HINT).should('be.visible').contains(LoginPage.nonExistingUserError);
    });
  });

  it('Log in with problem user', () => {
    cy.fixture('users.json').then((users) => {
      const problemUser = users.problemUser;
      cy.login(problemUser.username,problemUser.password);
      InventoryPage.checkIfPageIsOpened();
    });
  });

  it('Log in with performance glitch user', () => {
    cy.fixture('users.json').then((users) => {
      const performanceUser = users.performanceUser;
      cy.login(performanceUser.username,performanceUser.password);
      InventoryPage.checkIfPageIsOpened();
    });
  });
});