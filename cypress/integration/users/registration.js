const { user1 } = require('../../fixtures/user')

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('index.php?route=account/register')
    })

    it.skip('The user is able to open registration form', () => {
        cy.get('[href$="=account/register"]').eq(0).click({ force: true })
        cy.url().should('include', '=account/register')
    });

    it('All labels and fields exist', () => {
        cy.get('#input-firstname').should('exist')
        cy.get('#input-lastname').should('exist')
        cy.get('#input-telephone').should('exist')
        cy.get('#input-password').should('exist')
        cy.get('#input-confirm').should('exist')
    });

    it('Should be able to submit registration form', () => {
        cy.get('#input-firstname').type(user1.firstName)
        cy.get('#input-lastname').type(user1.lastName)
        cy.get('#input-telephone').type(user1.phone)
        cy.get('#input-password').type(user1.password)
        cy.get('#input-confirm').type(user1.password)

        cy.get('input[name="agree"]').click()

        cy.contains('Continue').click()
        // Assert
    });

    it('Should be able to open contact form', () => {


    });

    it('Should be able to open contact form', () => {


    });
});