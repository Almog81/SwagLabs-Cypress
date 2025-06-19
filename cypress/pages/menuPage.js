/// <reference types="cypress" /> 

export class MenuPage {
    //Objects
    btn_menu = '.bm-burger-button';
    btn_logout = 'Logout';
    btn_inventory = '.inventory_sidebar_link';

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
    navigateToInventoryPage() {
        this.openMenu()
        cy.contains(this.btn_inventory).click()
        cy.waitForPageLoad()
    }
}