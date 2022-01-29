const { user1: randomUser1 } = require('../../fixtures/user')

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('index.php?route=account/register')
    })

    it('All labels and fields exist', () => {
        // Assert
        cy.get('#input-firstname').should('exist')
        cy.get('#input-lastname').should('exist')
        cy.get('#input-telephone').should('exist')
        cy.get('#input-password').should('exist')
        cy.get('#input-confirm').should('exist')
    });

    it('Should be able to register a new user', () => {
        cy.get('#input-firstname').type(randomUser1.firstName)
            .get('#input-lastname').type(randomUser1.lastName)
            .get('#input-email').type(randomUser1.email)
            .get('#input-telephone').type(randomUser1.phone)
            .get('#input-password').type(randomUser1.password)
            .get('#input-confirm').type(randomUser1.password)
            .get('input[name="agree"]').click()
            .contains('Continue').click()

        // Assert
        cy.url().should('include', 'route=account/success')
        cy.contains('Thank you for registering with Your Store!')
    });

});