const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/step_definitions/*.feature",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('file:preprocessor', cucumber())
      return config;
    },
    env: {
      "allureResultsPath": "allure-results",
      "allureLogCypress": true
    },
  }
})