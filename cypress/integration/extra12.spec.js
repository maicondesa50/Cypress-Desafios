/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Marca o tipo de atendimento Feedback', function () {
    before(() => {
        cy.visit(url)
    })

    it('Marcar o tipo de atendimento com feedback', function () {
        cy.get('input[type="radio"]').should('be.visible').check('feedback').should('have.value', 'feedback')
    })

})