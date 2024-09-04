describe('Cypress POC - Initial Lumen Tests', () => {});

context('Base Lightkeeper Tests', () => {

    it('Can open Lightkeeper', () => {
        cy.get('div').contains('Lightkeeper').click()
        cy.get('g[id="wrapper"]').should("exist")
    })

    it('Check agent grid toggle', () =>{
        cy.get('div').contains('Lightkeeper').click()
        cy.get('#show-grid-button').click()
        cy.get('#search').should('exist');
    })

    it('Check agent graph toggle', () =>{
        cy.get('div').contains('Lightkeeper').click()
        cy.get('#show-graph-button').then((x) => {
            if (x.is("enabled")) {
                cy.get('#show-graph-button').click()
            }
        });
        cy.get('#clear-layout-button').should('exist');
    })
})

context('Add Agent Tests', () => {
    it('Add CSV Data Manager Test', () => {
        cy.viewport(1803, 662)
        cy.get('div').contains('Lightkeeper').click()
        cy.get('[href="/lumen-lightkeeper/agents/onboard"]').click()
        cy.get('span[title="CSV"]').click()
        cy.get('.k-textbox').type('Test')
        cy.get('#description').type('Test')
        //Invoke removal of class so as not hidden and select a file:
        cy.get('#k-fileselect-input-1')
            .invoke("removeClass", "k-hidden")
            .selectFile('/home/james/Documents/work/testing/supportingDocuments/analytics/csv/data managers/multiplier-test-rates-002.csv')
        cy.get('#next-button').click()
        cy.get('input[id="k-grid0-select-all"]').click()

        //Populate all first output section (count starts at 0):
        cy.get('#output-item-0').contains("Tags")
            .type('test-csv-output{Enter}')

        //Populate all second output section
        cy.get('#output-item-1').contains("Please select").click()
            .get('li[index="5"]').click()
        cy.get('#output-item-1').contains("Tags")
            .type('date-generated{Enter}')

        //Populate all third output section
        cy.get('#output-item-2').contains("Please select").click()
            .get('li[index="2"]').click()
        cy.get('#output-item-2').contains("Tags")
            .type('status{Enter}')

        //Populate all fourth output section
        cy.get('#output-item-3').contains("Please select").click()
            .get('li[index="0"]').click()
        cy.get('#output-item-3').contains("Tags")
            .type('multiplier-rate{Enter}')

        //Populate all fifth output section
        cy.get('#output-item-4').contains("Please select").click()
            .get('li[index="4"]').click()
        cy.get('#output-item-4').contains("Tags")
            .type('multiplier-applies{Enter}')
        cy.wait(5000)
        cy.get('#next-button').click()
        cy.wait(5000)
        cy.get('#next-button').click()
        cy.wait(5000)
        cy.get('#next-button').click()
        cy.wait(5000)
        cy.get('#finish-button').click()
    })
})

