// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("persistCookies", () => {
	cy.getCookies()
		.then((cookies) => {
			cy.writeFile('cookies.json', cookies);
		});
});

Cypress.Commands.add("restoreCookies", () => {

	cy.readFile('cookies.json')
		.then((cookies) => {
			cookies.forEach((cookie) => {
				// cy.log( JSON.stringify( cookie ) ); // See the cookie contents
				cy.setCookie(cookie.name, cookie.value, {
					domain: Cypress.env('domain'),
					path: cookie.path,
					secure: cookie.secure,
					httpOnly: cookie.httpOnly,
					expiry: cookie.expiry
				});
			});
		});
});