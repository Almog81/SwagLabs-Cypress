/// <reference types="cypress" /> 

export class MenuPage {
    //Objects
    btn_menu = '.bm-burger-button';
    btn_logout = 'Logout';

    //Action
    openMenu() {
        cy.get(this.btn_menu).click()
        cy.waitForPageLoad()
    }
    logoutAction() {
        this.openMenu()
        cy.contains(this.btn_logout).click()
        cy.waitForPageLoad()
    }
}