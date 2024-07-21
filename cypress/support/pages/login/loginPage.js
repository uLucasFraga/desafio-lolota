const elements = require('./elements').LOGIN;

class loginPage {

    doLogin(user, password) {
        cy.get(elements.username).type(user)
        cy.get(elements.password).type(password)
        cy.get(elements.loginButton).click()
    }
}

export default new loginPage();
