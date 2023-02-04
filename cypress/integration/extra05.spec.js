/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 03
describe('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    before(() => {
        cy.visit(url)
    })

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Preenche e limpa o Campo nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .clear()
            .should('have.value', '')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .clear()
            .should('have.value', '')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa')
            .clear()
            .should('have.value', '')
    })

    it('Preenche e limpa o Campo nome', function () {
        const phoneNumber = '993005943'
        cy.get('input[id="phone"]')
            .type('phoneNumber')
            .clear()
            .should('have.value', '')
    })

})