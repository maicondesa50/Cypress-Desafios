/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Marca cada tipo de atendimento', function () {
    before(() => {
        cy.visit(url)
    })

    it('Marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]').should('be.visible').check('ajuda').should('be.checked', 'ajuda')
        cy.get('input[type="radio"][value="elogio"]').should('be.visible').check().should('be.checked', 'elogio')
        cy.get('input[type="radio"]').should('be.visible').check('feedback').should('be.checked', 'feedback')
    })

    it('Marcando cada tipo de atendimento com o each', function () {
        cy.get('input[type="radio"]')
            .should('be.visible')
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
})