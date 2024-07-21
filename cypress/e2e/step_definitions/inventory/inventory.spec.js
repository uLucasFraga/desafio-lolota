import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'

Given("I have a successful login", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
})

When("I access the inventory page", () => {
    inventoryPage.validateUrl('inventory')
})

Then("The product catalog is visible", () => {
    inventoryPage.getInventory();
})