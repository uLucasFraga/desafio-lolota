import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/pages/login/loginPage'
const loginElements = require('../../../support/pages/login/elements').LOGIN;

Given("I'm on the login page", () => {
    cy.visit(Cypress.config().baseUrl)
})

When("I type a registered email and password", () => {
    login.doLogin('standard_user', 'secret_sauce')
})

Then("I have a successful login", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

When("I type a registered email and an incorrect password", () => {
    login.doLogin('standard_user', 'incorrect_password')
})

Then("I have an unsuccessful login", () => {
    cy.get(loginElements.alertError).should('be.visible')
})

When("I don't type the email and password fields", () => {
    cy.get(loginElements.loginButton).click()
})

Then("I have unfilled required fields", () => {
    cy.get(loginElements.alertError).should('be.visible')
})
