/// <reference types="cypress" />

describe('Cypress Studio Demo', () => {});

context('login', () => {
    beforeEach(() => {
        //it('.type() - type into a DOM element', () => {
        cy.visit('https://test.bellrock.dev')
        cy.get('#login-email')
            .type('james.craig+1@bellrocktechnology.com').should('have.value', 'james.craig+1@bellrocktechnology.com')
        cy.get('#next-button').click()
        cy.get('#password').type('T3stUs3r!',{ parseSpecialCharSequences: false })
        cy.get('#login-button').click()
        cy.wait(5000)
        cy.get('header').should('exist')
        cy.location().then((location) => {
            //cy.wrap(location.href).should(
            //"contain",
            //"#nav-dashboard"
            //)
            cy.end()
        })
        //})
    })

    it('Can open Lightkeeper', () => {
        cy.get('.admin-app > img:nth-child(1)').click()
        //   .should('have.class', 'focus')
        //   .prev().should('have.attr', 'style', 'color: orange;')
        cy.wait(20000)
        cy.location().then((location) => {
            cy.wrap(location.href).should(
                "contain",
                "/lumen-lightkeeper/agents/view"
            )
            cy.end()
        })
    })
})