// TODO: fix naming
describe('Shopping TODO', () => {
	beforeEach(() => {
		cy.visit('')
	})

	it('TODO TODO', () => {
		cy.get('.product-layout').each(prod => {

			var totalPrice = 0.0
			cy.wrap(prod).find('.caption a').invoke('text').then(text => {
				if (text == 'MacBook' || text == 'iPhone') {
					cy.wrap(prod).find('button .fa-shopping-cart').click()
					cy.wrap(prod).find('.price').invoke('text').then(price => {
						var p = price.trim().split(' ')[0]
						cy.log(p)
					})
				}
			})
		})

	})

})