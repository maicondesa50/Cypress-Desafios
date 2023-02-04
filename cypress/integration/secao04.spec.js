/// <reference types="Cypress" />

const url = './src/index.html'


describe('Usando a ferarmenta select', function () {
    before(() => {
        cy.visit(url)
    })

    it('Select youtube', function () {
        cy.get('select[id="product"]').should('be.visible').select('youtube').should('have.value', 'youtube')
    })

    it('Seleciona um produto (mentoria) por seu valor (value)', function () {
        cy.get('#product').should('be.visible').select('Mentoria').should('have.value', 'mentoria')
    })

    it('Seleciona um produto (Blog) por seu Indice', function () {
        cy.get('#product').should('be.visible').select(1).should('have.value', 'blog')
    })

})