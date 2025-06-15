/// <reference types="cypress" /> 

export class HomePage {
    //Objects
    btn_register = 'Register';
    btn_welcome = 'Welcome';
    btn_logOut = 'Log Out';

    //Action
    naviLoginPage() {
        cy.navigateToHome()
    }
    naviCreateAccountPage() {
        cy.navigateToHome()
        cy.contains(this.btn_register).click()
        cy.waitForPageLoad()
    }

    logoutAction() {
        cy.waitForPageLoad()
        cy.contains(this.btn_logOut).click()
        cy.contains(this.btn_register).should('be.visible')
    }
}