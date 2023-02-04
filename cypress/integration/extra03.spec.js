/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 03
describe('Valide que no campo telefone só será aceito digitar números', function () {
    before(() => {
        cy.visit(url)
    })

    it('Valida se o telefone é int', function () {
        const phoneNumber = '993005943'
        cy.get('input[id="phone"]')
            .type('abcdf')
            .should('have.value', '')
    })
})