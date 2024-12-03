/// <reference types="cypress" /> 

export class LoginPage {
    //Objects
    txt_loginEmail = '#email';
    txt_password = '#passwd';
    btn_login = '#SubmitLogin';
    txt_emailCreate = '#email_create';
    btn_submitCrate = '#SubmitCreate';
    elm_crateAcontError = '#create_account_error';

    //Action
    loginAction(email,pass){
        cy.get(this.txt_loginEmail).type(email)
        cy.get(this.txt_password).type(pass)
        cy.get(this.btn_login).click()
    }
    createAcont(email){
        cy.get(this.txt_emailCreate).type(email)
        cy.get(this.btn_submitCrate).click()
    }

    
    
}