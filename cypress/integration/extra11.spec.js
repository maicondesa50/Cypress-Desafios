/// <reference types="Cypress" />

const url = './src/index.html'

describe('Seleciona um produto por ser indice', function () {
    before(() => {
        cy.visit(url)
    })

    it('Seleciona um produto (Blog) por seu Indice', function () {
        cy.get('#product').should('be.visible').select(1).should('have.value', 'blog')
    })
})