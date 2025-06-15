/// <reference types="cypress" /> 

import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"
import { MenuPage } from "../pages/menuPage"
import { CartPage } from "../pages/cartPage"

const homePage = new HomePage;
const loginPage = new LoginPage;
const menuPage = new MenuPage;
const cartPage = new CartPage;

describe('Swa Labs Tests', () => {

    beforeEach(function() {
        cy.fixture('loginData').then((data) => {
            this.users = data;
        });
    });

    it('Test01: login Test for all users', function() {
        this.users.forEach((user) => {
            homePage.naviLoginPage();
            loginPage.loginAction(user).then((errorMsg) => {
                if (errorMsg) {
                    cy.log(`❌ Failed to login as ${user.username}: ${errorMsg}`);
                } else {
                    cy.log(`✅ Successfully logged in as ${user.username}`);
                    menuPage.logoutAction();
                }
            });
        });
    });

    it('Test02: Add The lowest to cart', function() {
        homePage.naviLoginPage();
        loginPage.safeLoginAction(this.users[0]);
        //To do: find the lowest price product and add it to cart
    });
})