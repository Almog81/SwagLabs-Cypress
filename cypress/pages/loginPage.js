/// <reference types="cypress" /> 

export class LoginPage {
    //Objects
    txt_loginEmail = 'input[name="username"]';
    txt_password = 'input[name="password"]';
    btn_login = 'input[value="Log In"]';
    elm_welcome = 'Welcome'

    
    //Action
    loginAction(user){
        cy.get(this.txt_loginEmail).type(user.username)
        cy.get(this.txt_password).type(user.password)
        cy.get(this.btn_login).click()
        cy.waitForPageLoad()
        cy.contains(this.elm_welcome).should('contain.text', user.name)
    }
    
}