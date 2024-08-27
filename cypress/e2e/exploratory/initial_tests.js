describe('Initial Test', function (){
    it('Not do much ', function() {
        cy.visit('https://test.bellrock.dev')
        cy.viewport(1803, 662)
        cy.get('#login-email').click()
        cy.get('#login-email').type('james.craig+1@bellrocktechnology.com')
        cy.get('#next-button').click()
        cy.get('#password').type('T3stUs3r!')
        cy.get('#password').click()
        cy.get('#login-button').click()
    });
})