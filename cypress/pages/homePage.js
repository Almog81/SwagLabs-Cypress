/// <reference types="cypress" /> 

export class HomePage {
    //Objects
    btn_signIn = '.login';
    url_homePage = 'http://www.automationpractice.pl';
    btn_account = '.account';

    //Action
    naviHomePage(){
        cy.visit(this.url_homePage)
    }
    naviLoginPage(){
        cy.get(this.btn_signIn).click()
    }
    
    
}