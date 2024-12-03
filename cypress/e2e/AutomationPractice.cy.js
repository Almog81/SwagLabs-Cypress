/// <reference types="cypress" /> 

import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"

let homePage = new HomePage;
let loginPage = new LoginPage;

describe('Santy Tests', () => {
  
  beforeEach(() => {
    cy.fixture('loginData.json').as('loginData')
    cy.fixture('crateUsers').as('newUser')
  })

  it('login Test', () => {
    homePage.naviHomePage()
    homePage.naviLoginPage()
    cy.get('@loginData').then((user) => {
      loginPage.loginAction(user.email, user.password )
      cy.get(homePage.btn_account).should('contain', user.name)
    })
  })

  it('Create Aconte Test', () => {
    homePage.naviHomePage()
    homePage.naviLoginPage()
    cy.get('@loginData').then((user) => {
      loginPage.createAcont(user.email )
    })
  })
  

})