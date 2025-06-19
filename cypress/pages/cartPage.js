/// <reference types="cypress" /> 

export class CartPage {
    //Objects
    link_shippingCart = '.shopping_cart_link';
    txt_firstName = '[data-test="firstName"]';
    txt_lastName = '[data-test="lastName"]';
    elm_cartItems = '.cart_list .cart_item';
    elm_inventoryItemName = '.inventory_item_name';
    elm_inventoryItemPrice = '.inventory_item_price';
    elm_inventoryItemQuantity = '.cart_quantity';
    elm_inventoryItemTotalPrice = '.inventory_item_price';
    btn_continueShopping = '.btn_secondary.continue-shopping';
    btn_removeItem = '.btn_secondary.cart_button';
    btn_continueCheckout = '.btn_primary.cart_button';
    btn_cancelCheckout = '.btn_secondary.cart_cancel_link';

    btn_checkout = '.btn_action.checkout_button';

    //Action
    openCart() {
        cy.get(this.link_shippingCart).click();
        cy.waitForPageLoad();
    }
    getCartItems() {
        return cy.get(this.elm_cartItems);
    }
    getCartItemNames() {
        return cy.get(this.elm_inventoryItemName);
    }
    getCartItemPrices() {
        return cy.get(this.elm_inventoryItemPrice);
    }
    getCartItemQuantities() {
        return cy.get(this.elm_inventoryItemQuantity);
    }
    getCartItemTotalPrices() {
        return cy.get(this.elm_inventoryItemTotalPrice);
    }
    getCartItemRemoveButtons() {
        return cy.get(this.btn_removeItem);
    }

}