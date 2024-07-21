import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage'
import inventoryPage from '../../pages/inventoryPage'
import cartPage from '../../pages/cartPage'
import informationPage from '../../pages/informationPage'
import overviewPage from '../../pages/overviewPage'
import finishPage from '../../pages/finishPage'

Given("I valid the products in the shopping cart", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
    inventoryPage.setProduct('Sauce Labs Backpack');
    inventoryPage.setProduct('Sauce Labs Bike Light');
    inventoryPage.clickAddToCart('Sauce Labs Backpack');
    inventoryPage.clickAddToCart('Sauce Labs Bike Light');
    inventoryPage.clickShoppingCart();
    inventoryPage.getProduct('Sauce Labs Backpack');
    inventoryPage.getProduct('Sauce Labs Bike Light');
})

When("I click on the checkout button of the page cart", () => {
    cartPage.clickCheckout();
    informationPage.getTitleInformation('Checkout: Your Information');
})

And("I type my first name, last name, and zip postal code in the information form", () => {
    informationPage.typeFistName('Lucas');
    informationPage.typeLastName('Desafio');
    informationPage.typePostalCode('123456');
})

And("I click on the continue button of the checkout page", () => {
    informationPage.clickContinue();

})

And("I valid the overview of the checkout page and click finish button", () => {
    overviewPage.getTitleOverview('Checkout: Overview');
    overviewPage.clickFinish();
})

Then("I have a successful purchase", () => {
    finishPage.getTitleFinish('Finish');
    finishPage.getThankYou('THANK YOU FOR YOUR ORDER');
})