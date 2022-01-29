var f = require('@faker-js/faker');

describe('Login', () => {
    beforeEach(() => {
        cy.visit('index.php?route=account/login')
    })

    it('All labels and fields exist', () => {
        cy.get('#input-email').should('exist')
        cy.get('#input-password').should('exist')
    });

    it('Bad credentials should fail', () => {
        cy.clearAuth()
        cy.get('#input-email').type(f.internet.email())
            .get('#input-password').type(f.internet.password())
            .get('input[value="Login"]').click()

        // Assert
        cy.url().should('include', 'route=account/login')
        cy.get('.alert').should('be.visible')
            .and('contain', 'Warning: No match for E-Mail Address and/or Password.')
    });

    it('Should be able to login', () => {
        cy.clearAuth()
        cy.get('#input-email').type(Cypress.env('userEmail'))
            .get('#input-password').type(Cypress.env('userPwd'))
            .get('input[value="Login"]').click()

        // Assert
        cy.url().should('include', 'route=account/account')
        cy.contains('My Account').should('exist')

        // Saving cookies for logged in user
        cy.persistAuth()
    });
});