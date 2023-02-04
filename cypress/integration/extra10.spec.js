/// <reference types="Cypress" />

const url = './src/index.html'

describe('Seleciona um produto por seu valor', function () {
    before(() => {
        cy.visit(url)
    })

    it('Seleciona um produto (mentoria) por seu valor (value)', function () {
        cy.get('#product').should('be.visible').select('Mentoria').should('have.value', 'mentoria')
    })
})