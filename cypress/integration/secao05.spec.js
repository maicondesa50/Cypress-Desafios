/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Marca o RadioButton', function () {
    before(() => {
        cy.visit(url)
    })

    it('Marcar o tipo de atendimento com feedback', function () {
        cy.get('input[type="radio"]').should('be.visible').check('feedback').should('have.value', 'feedback')
    })

    it('Marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]').should('be.visible').check('ajuda').should('be.checked', 'ajuda')
        cy.get('input[type="radio"][value="elogio"]').should('be.visible').check().should('be.checked', 'elogio')
        cy.get('input[type="radio"]').should('be.visible').check('feedback').should('be.chceked', 'feedback')
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