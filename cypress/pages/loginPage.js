/// <reference types="cypress" /> 

export class LoginPage {
    //Objects
    txt_loginEmail = '#email';
    txt_password = '#pass';
    btn_login = '.action.login.primary';
    elm_crateAccuontError = '#create_account_error';
    
    //Action
    loginAction(email,pass,name){
        cy.get(this.txt_loginEmail).type(email)
        cy.get(this.txt_password).type(pass)
        cy.get(this.btn_login).click()
        cy.waitForPageLoad() 
    }
    
}