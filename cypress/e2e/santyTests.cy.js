/// <reference types="cypress" /> 

import { InvetoryPage } from "../pages/InvetoryPage"
import { LoginPage } from "../pages/loginPage"
import { MenuPage } from "../pages/menuPage"
import { CartPage } from "../pages/cartPage"

const inventoryPage = new InvetoryPage;
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
            cy.navigateToLoginPage()
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

    it.only('Test02: Add The lowest to cart', function() {
        loginPage.safeLoginAction(this.users[0]);
        inventoryPage.sortListBy("lohi")
    });
})