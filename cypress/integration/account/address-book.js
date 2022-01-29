var { user1 } = require('../../fixtures/user')

describe('My Account', () => {
	beforeEach(() => {
		cy.restoreAuth()
	})

	it('Should display my address book page', () => {
		cy.visit('index.php?route=account/address')

		// Assert
		cy.get('h2').should('contain', 'Address Book Entries')
		cy.get('a').should('contain', 'New Address')
	})

	it('Should navigate to new address page', () => {
		cy.visit('index.php?route=account/address')
		cy.get('a').contains('New Address').click()

		// Assert
		cy.url().should('contain', 'account/address/add')
		cy.get('h2').should('contain', 'Add Address')
	})

	it.only('Should add new address', () => {
		cy.visit('index.php?route=account/address/add')
		cy.get('#input-firstname').type(user1.firstName)
		cy.get('#input-lastname').type(user1.lastName)
		cy.get('#input-company').type(user1.company)
		cy.get('#input-address-1').type(user1.address.street)
		cy.get('#input-address-2').type('123')
		cy.get('#input-city').type(user1.address.city)
	})

})