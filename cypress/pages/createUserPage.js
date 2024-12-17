/// <reference types="cypress" /> 

export class CreateUserPage {
    //Objects

    txt_firstName = "#firstname"
    txt_lastName = "#lastname"
    txt_email = "#email_address"
    txt_password = "#password"
    txt_passwordConfirmation = "#password-confirmation"
    btn_submit = ".action.submit.primary"
    
    elm_messageSuccess = ".message-success"
    elm_messageError = ".message-error"

    
    //Action
    createAcont(user){
        cy.get(this.txt_firstName).type(user.firstName)
        cy.get(this.txt_lastName).type(user.lastName)
        cy.get(this.txt_email).type(user.email)
        cy.get(this.txt_password).type(user.password)
        cy.get(this.txt_passwordConfirmation).type(user.password)
        cy.get(this.btn_submit).click()
        cy.waitForPageLoad()
        cy.get(this.elm_messageSuccess).should('be.visible')
    }
    
}