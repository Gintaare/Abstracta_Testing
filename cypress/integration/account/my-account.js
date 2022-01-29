describe('My Account', () => {
	beforeEach(() => {
		cy.restoreCookies()
		cy.visit('index.php?route=account/account')
	})

	it('Should display my account page', () => {
		// Assert
		cy.get('h2')
			.should('contain', 'My Account')
			.should('contain', 'My Orders')
			.should('contain', 'My Affiliate Account')
			.should('contain', 'Newsletter')

		cy.get('#content a')
			.should('contain', 'Edit Account')
			.should('contain', 'Password')
			.should('contain', 'Address Book')
			.should('contain', 'Wish List')
			.should('contain', 'Order History')
			.should('contain', 'Downloads')
			.should('contain', 'Reward Points')
			.should('contain', 'Returns')
			.should('contain', 'Transactions')
			.should('contain', 'Payment Profile')
	})

})