describe('Pages navigation', () => {
	beforeEach(() => {
        cy.visit('')
    })

	it('Should be able to open Contact Us', () => {
		var contactButtons = cy.get('[href$="contact"]')
		contactButtons.should($a => {
			expect($a).to.have.length(2)
		})
		contactButtons.first().click()
		cy.url().should('include', '=information/contact')
	});

    it('Should be able to open About Us', () => {

        cy.contains("About us").click()
		cy.url().should('include', '/information&information_id=4')
	});


    it('Should be able to open Privacy Policy', () => {

        cy.contains("Privacy Policy").click()
		cy.url().should('include', '/information&information_id=3')
	});


    it('Should be able to open Delivery Information', () => {

        cy.contains("Delivery Information").click()
		cy.url().should('include', '/information&information_id=6')
	});


    it('Should be able to open Terms & Conditions', () => {

        cy.contains("Terms & Conditions").click()
		cy.url().should('include', '/information&information_id=5')
	});

    it('Should be able to open Terms & Conditions', () => {

        cy.contains("Terms & Conditions").click()
		cy.url().should('include', '/information&information_id=5')
	});

    it('Should be able to open Terms & Conditions', () => {

        cy.contains("Terms & Conditions").click()
		cy.url().should('include', '/information&information_id=5')
	});
})