/// <reference types="cypress" /> 

export class CartPage {
    //Objects
    txt_action = "";


    //Action
    createAcont(user) {
        cy.get(this.txt_firstName).type(user.firstName)

    }

}