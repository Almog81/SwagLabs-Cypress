/// <reference types="cypress" /> 

import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"
import { CreateUserPage } from "../pages/createUserPage"

const homePage = new HomePage;
const loginPage = new LoginPage;
const createUser = new CreateUserPage;

describe('Luma Tests', () => {

  beforeEach(function() {
    cy.fixture('loginData').then((data) => {
      this.users = data;
    });
    cy.fixture('crateUsers').then((data) => {
      this.newUsers = data;
    });
  });

  it('login Test for multiple users', function() {
    this.users.forEach((user) => {
      homePage.naviHomePage();
      homePage.naviLoginPage();
      loginPage.loginAction(user.email, user.password, user.name);
      homePage.logoutAction();
    });
  });

  it('Create Aconte Test', function() {
    this.newUsers.forEach((newUser) => {
      homePage.naviHomePage()
      homePage.naviCreateAccountPage()
      createUser.createAcont(newUser)
      homePage.logoutAction();
    })
  })
})

