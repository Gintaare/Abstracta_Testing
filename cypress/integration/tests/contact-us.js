
describe('Contact Us form', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Should be able to open contact form', () => {
        var contactButtons = cy.get('[href$="contact"]')
        contactButtons.should($a => {
            expect($a).to.have.length(2)
        })
        contactButtons.first().click()
        cy.url().should('include', '=information/contact')
        
    });

    it.only('Fields and labels should exist', () => {
        cy.get('#input-name').should('exist')
        cy.get('#input-email').should('exist')
        cy.get('#input-enquiry').should('exist')
    });

    it('Should be able to submit contact form', () => {
        cy.fixture('example').then(c => {
        cy.get('#input-name').type(c.name)
        cy.get('#input-email').type(c.email)
        cy.get('#input-enquiry').type(c.body)
    })
        cy.get(".pull-right").eq(2).click()
        cy.url().should('include', '/contact/success')
    });

    it('Empty fields shows an error', () => {
        cy.get(".pull-right").eq(2).click();
        cy.get(".text-danger").eq(0).should('contain', 'Name must be between 3 and 32 characters!')
        cy.get(".text-danger").eq(1).should('contain', 'E-Mail Address does not appear to be valid!')
        cy.get(".text-danger").eq(2).should('contain', 'Enquiry must be between 10 and 3000 characters!')
    });

    it('Name shorter than 2 characters shows error', () => {
        cy.get(".pull-right").eq(2).click();
        cy.get(".text-danger").eq(0).should('contain', 'Name must be between 3 and 32 characters!')
        cy.get(".text-danger").eq(1).should('contain', 'E-Mail Address does not appear to be valid!')
        cy.get(".text-danger").eq(2).should('contain', 'Enquiry must be between 10 and 3000 characters!')
    });


    it('Email requires valid email address - no @', () => {
        cy.get("#input-email").type("emailgmail.com")
        cy.get(".pull-right").eq(2).click();
        // Assert
        cy.get(".text-danger").eq(1).should('contain', 'E-Mail Address does not appear to be valid!')
    });

    it('Email requires valid email address - no TLD', () => {
        cy.get("#input-email").type("email@gmail")
        cy.get(".pull-right").eq(2).click();
        cy.get(".text-danger").eq(1).should('contain', 'E-Mail Address does not appear to be valid!')
    });
});
