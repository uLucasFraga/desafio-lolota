Feature: Cart

Scenario: Valid Cart
Given I access the inventory page
When I click on the addToCart button of product
Then I valid the products in the shopping cart

Scenario: Remove products from shopping cart
Given I access the cart page
When I click on the remove button of shopping cart
Then I valid that the remove button does not exist