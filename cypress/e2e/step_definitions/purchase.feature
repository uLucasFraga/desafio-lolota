Feature: Purchase

Scenario: Valid Purchase
Given I valid the products in the shopping cart
When I click on the checkout button of the page cart
And I type my first name, last name, and zip postal code in the information form
And I click on the continue button of the checkout page
And I valid the overview of the checkout page and click finish button
Then I have a successful purchase