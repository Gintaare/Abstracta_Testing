
describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://opencart.abstracta.us/index.php?route=account/register')
    })

    it.skip('The user is able to open registration form', () => {
        cy.get('[href$="=account/register"]').eq(0).click({force: true})
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
        cy.fixture('example').then(c => {
        cy.get('#input-firstname').type(c.name)
        cy.get('#input-lastname').type(c.lastname)
        cy.get('#input-telephone').type(c.phone)
        cy.get('#input-password').type(c.password)
        cy.get('#input-confirm').type(c.password)
        cy.get('input[value="1"]').click()
    });
    });

    it('Should be able to open contact form', () => {
   
        
    });

    it('Should be able to open contact form', () => {
   
        
    });
});