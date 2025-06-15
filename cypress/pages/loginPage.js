/// <reference types="cypress" /> 

export class LoginPage {
    //Objects
    txt_loginEmail = '[data-test="username"]';
    txt_password = '[data-test="password"]';
    btn_login = '#login-button';
    elm_logo = '.app_logo';
    msg_error = '[data-test="error"]';


    //Action
    loginAction(user) {
        cy.get(this.txt_loginEmail).type(user.username);
        cy.get(this.txt_password).type(user.password);
        cy.get(this.btn_login).click();
        cy.waitForPageLoad();
        return this.verifyLoginSuccess(); // נחזיר את הערך החוצה
    }

    safeLoginAction(user) {
        this.loginAction(user);
    }

    verifyLoginSuccess() {
        return cy.get('body').then(($body) => {
            if ($body.find(this.msg_error).length > 0) {
                return cy.get(this.msg_error).invoke('text');
            } else {
                cy.get(this.elm_logo).should('be.visible');
                return null;
            }
        });
    }
}