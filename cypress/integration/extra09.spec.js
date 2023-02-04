/// <reference types="Cypress" />

const url = './src/index.html'

describe('Selecione um produte (youtube) por seu texto', function () {
    before(() => {
        cy.visit(url)
    })

    it('Select youtube', function () { 
        cy.get('#product').should('be.visible').select('youtube').should('have.value', 'youtube')
    })
})