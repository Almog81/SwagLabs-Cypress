/// <reference types="cypress" /> 

import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"
import { Register } from "../pages/register"

const homePage = new HomePage;
const loginPage = new LoginPage;
const createUser = new Register;

describe('Luma Tests', () => {

  beforeEach(function() {
    cy.fixture('loginData').then((data) => {
      this.users = data;
    });
    cy.fixture('crateUsers').then((data) => {
      this.newUsers = data;
    });
  });

  it('Test01: Create Aconte Test', function() {
    this.newUsers.forEach((newUser) => {
      homePage.naviCreateAccountPage()
      createUser.createAcont(newUser)
      homePage.logoutAction();
    })
  })

  it('Test02: login Test for all users', function() {
    this.users.forEach((user) => {
      homePage.naviLoginPage();
      loginPage.loginAction(user);
      homePage.logoutAction();
    });
  });


})

