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

Cypress.Commands.add('navigateToHome', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.waitForPageLoad()
})

Cypress.Commands.add('waitForPageLoad', () => {
    cy.get('body').should('be.visible')
    cy.window().then(win => {
        cy.wrap(new Promise(resolve => {
            if (win.document.readyState === 'complete') {
                resolve()
            } else {
                win.addEventListener('load', resolve)
            }
        }))
    })
    cy.document().should('have.property', 'readyState', 'complete')
})