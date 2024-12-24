/// <reference types="cypress" /> 

export class Register {
    //Objects
    txt_firstName = "#customer\\.firstName"
    txt_lastName = "#customer\\.lastName"
    txt_address = "#customer\\.address\\.street"
    txt_city = "#customer\\.address\\.city"
    txt_state = "#customer\\.address\\.state"
    txt_zapCode = "#customer\\.address\\.zipCode"
    txt_phonNamber = "#customer\\.phoneNumber"
    txt_ssn = "#customer\\.ssn"
    txt_username = "#customer\\.username"
    txt_password = "#customer\\.password"
    txt_passwordConfirmation = "#repeatedPassword"
    btn_submit = "input[value='Register']"
    
    elm_messageSuccess = "Your account was created successfully"
    elm_messageError = ".message-error"

    
    //Action
    createAcont(user){
        cy.get(this.txt_firstName).type(user.firstName)
        cy.get(this.txt_lastName).type(user.lastName)
        cy.get(this.txt_address).type(user.address)
        cy.get(this.txt_city).type(user.city)
        cy.get(this.txt_state).type(user.state)
        cy.get(this.txt_zapCode).type(user.zipCode)
        cy.get(this.txt_phonNamber).type(user.phone)
        cy.get(this.txt_ssn).type(user.ssn)
        cy.get(this.txt_username).type(user.username)
        cy.get(this.txt_password).type(user.password)
        cy.get(this.txt_passwordConfirmation).type(user.password)
        cy.get(this.btn_submit).click()
        cy.waitForPageLoad()
        cy.contains(this.elm_messageSuccess).should('be.visible')
    }
    
}