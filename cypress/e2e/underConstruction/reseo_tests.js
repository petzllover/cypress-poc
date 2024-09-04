describe('Cypress POC - Initial Reseo Test', () => {});

context('reseo', () => {
    it('Can open Reseo', () =>{
        cy.get('div[title="Reseo application"]').click()
        cy.contains('Funds Overview');
    })
})