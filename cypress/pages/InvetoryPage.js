/// <reference types="cypress" /> 

export class InvetoryPage {
    //Objects
    select_sort = '.product_sort_container';


    //Action
    sortListBy(typeOfSort) {
        cy.get(this.select_sort).select(typeOfSort)
    }
}