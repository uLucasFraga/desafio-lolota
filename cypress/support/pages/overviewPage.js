class overviewPage{

    elements = {
        overviewTitle: () => cy.get('.subheader'),
        finishBtn: () => cy.contains('a', 'FINISH'),
        paymentInfLabel: () => cy.get('h3[data-test="error"]')
    }

    getTitleOverview(title) {
        return this.elements.overviewTitle().should('have.text', title)
    }

    clickFinish(){
        this.elements.finishBtn().click();
    }

    getPaymentInf(expectedMessage) {
        return this.elements.paymentInfLabel().should('have.text', expectedMessage);
    }
}

module.exports = new overviewPage();