import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage'
import inventoryPage from '../../pages/inventoryPage'
import cartPage from '../../pages/cartPage'

Given("I access the inventory page", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
    inventoryPage.validateUrl('inventory')
})

When("I click on the addToCart button of product", () => {
    inventoryPage.clickAddToCart('Sauce Labs Backpack');
    inventoryPage.clickAddToCart('Sauce Labs Bike Light')
})

Then("I valid the products in the shopping cart", () => {
    inventoryPage.clickShoppingCart();
    inventoryPage.getProduct('Sauce Labs Backpack');
    inventoryPage.getProduct('Sauce Labs Bike Light');
})

Given("I access the cart page", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
    inventoryPage.setProduct('Sauce Labs Backpack');
    inventoryPage.setProduct('Sauce Labs Bike Light');
    inventoryPage.clickAddToCart('Sauce Labs Backpack');
    inventoryPage.clickAddToCart('Sauce Labs Bike Light');
    inventoryPage.clickShoppingCart();
    inventoryPage.validateUrl('cart')
})

When("I click on the remove button of shopping cart", () => {
    cartPage.clickRemove('Sauce Labs Backpack');
    cartPage.clickRemove('Sauce Labs Bike Light');
})

Then("I valid that the remove button does not exist", () => {
    cartPage.removeNotExist('Sauce Labs Backpack');
    cartPage.removeNotExist('Sauce Labs Bike Light');
})