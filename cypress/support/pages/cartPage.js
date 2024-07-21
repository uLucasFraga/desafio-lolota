class cartPage{

    elements = {
        removeProductBtn: (productName) => cy.contains('.cart_item', productName)
            .find('button'),
        checkoutBtn: () => cy.contains('a', 'CHECKOUT')
    }

    clickRemove(productName) {
        this.elements.removeProductBtn(productName).click();
    }

    removeNotExist(productName) {
        cy.contains('.cart_item', productName).should('not.exist');
    }

    clickCheckout(){
        this.elements.checkoutBtn().click();
    }


    
}

module.exports = new cartPage();