const { user1 } = require('../../fixtures/user')

describe('Login', () => {
    beforeEach(() => {
        cy.visit('index.php?route=account/login')
        Cypress.Cookies.preserveOnce()
    })

    it('All labels and fields exist', () => {
        cy.get('#input-email').should('exist')
        cy.get('#input-password').should('exist')
    });

    it.only('Should be able to login', () => {
        Cypress.Cookies.debug(true) 
        cy.get('#input-email').type(Cypress.config().userEmail)
            .get('#input-password').type(Cypress.config().userPwd)
            .get('input[value="Login"]').click()

        // Assert
        // cy.url().should('include', 'route=login/success')
    });


    // it('Should be able to open contact form', () => {


    // });

    // it('Should be able to open contact form', () => {


    // });
});