// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const password = Cypress.env('password')
const environment = Cypress.env('environment')

Cypress.config('defaultCommandTimeout', 20000);
beforeEach(() => {
    cy.visit('https://' + environment)
    cy.get('#login-email')
        .type('james.craig+1@bellrocktechnology.com').should('have.value', 'james.craig+1@bellrocktechnology.com')
    cy.get('#next-button').click()
    cy.get('#password').type(password,{ parseSpecialCharSequences: false })
    cy.get('#login-button').click()
    cy.get('header').should('exist')
    cy.location().then((location) => {
        cy.end()
    })
})