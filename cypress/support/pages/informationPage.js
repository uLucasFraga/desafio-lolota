class informationPage{

    elements = {
        informationTitle: () => cy.get('.subheader'),
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('input[value="CONTINUE"]'),

    }

    getTitleInformation(title) {
        return this.elements.informationTitle().should('have.text', title)
    }

    typeFistName(fistName){
        this.elements.firstNameInput().type(fistName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typePostalCode(zipPostalCode){
        this.elements.postalCodeInput().type(zipPostalCode);
    }

    clickContinue(){
        this.elements.continueBtn().click();
    }    
}

module.exports = new informationPage();