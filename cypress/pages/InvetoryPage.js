/// <reference types="cypress" /> 

export class InvetoryPage {
    //Objects
    select_sort = '.product_sort_container';
    list_inventory_items = '.inventory_list .inventory_item';

    img_item = '.inventory_item_img';
    elm_itemName = '.inventory_item_name';
    link_item = '.inventory_item_name a';
    elm_itemDescription = '.inventory_item_desc';
    elm_itemPrice = '.inventory_item_price';

    btn_addToCart = '.btn_inventory';
    btn_remove = '.btn_secondary';
    elm_itemQuantity = '.cart_quantity';

    //Action
    sortListBy(typeOfSort) {
        cy.get(this.select_sort).select(typeOfSort)
    }

    getInventoryItems() {
        return cy.get(this.list_inventory_items);
    }
    addItemToCart(itemIndex) {
        cy.get(this.list_inventory_items).eq(itemIndex).find(this.btn_addToCart).click();
    }
    getItemNames() {
        return cy.get(this.list_inventory_items).find(this.elm_itemName);
    }
    getItemPrices() {
        return cy.get(this.list_inventory_items).find(this.elm_itemPrice);
    }
    getItemQuantities() {
        return cy.get(this.list_inventory_items).find(this.elm_itemQuantity);
    }
    getItemTotalPrices() {
        return cy.get(this.list_inventory_items).find(this.elm_itemPrice);
    }
    getItemRemoveButtons() {
        return cy.get(this.list_inventory_items).find(this.btn_remove);
    }
    getItemAddToCartButtons() {
        return cy.get(this.list_inventory_items).find(this.btn_addToCart);
    }
    getItemImages() {
        return cy.get(this.list_inventory_items).find(this.img_item);
    }
    getItemDescriptions() {
        return cy.get(this.list_inventory_items).find(this.elm_itemDescription);
    }
    getItemLinks() {
        return cy.get(this.list_inventory_items).find(this.link_item);
    }

}