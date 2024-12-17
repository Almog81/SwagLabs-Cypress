/// <reference types="cypress" /> 

export class HomePage {
    //Objects
    btn_signIn = 'Sign In';
    btn_createAccount = 'Create an Account';
    url_homePage = 'https://magento.softwaretestingboard.com/';
    btn_account = '.logged-in';
    btn_signOut = 'Sign Out';
    elm_actionSwitch = '.action.switch';
    elm_signOut = '.base';

    //Action
    naviLoginPage(){
        cy.navigateToHome()
        cy.contains(this.btn_signIn).click()
        cy.waitForPageLoad()
    }
    naviCreateAccountPage(){
        cy.navigateToHome()
        cy.contains(this.btn_createAccount).click()
        cy.waitForPageLoad()
    }  

    logoutAction(){
        cy.waitForPageLoad()
        cy.get(this.elm_actionSwitch).eq(0).click()
        cy.contains(this.btn_signOut).click()
        cy.get(this.elm_signOut).should('contain.text', "You are signed out")
        cy.contains(this.btn_signIn).should('be.visible')
    }
}