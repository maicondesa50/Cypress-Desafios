/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 03
describe('Central de Atendimento ao Cliente TAT', function () {
    before(() => {
        cy.visit(url)
    })

    it('Preencha o Nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .should('have.value', 'Maicon')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .should('have.value', 'De Sa')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa@gmail.com')
            .should('have.value', 'maicongdsa@gmail.com')
    })

    it('Como podemos te ajudar', function () {
        const longtext = 'Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste'
        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(longtext, { delay: 0 })
            .should('have.value', longtext)
    })

    it('Botão enviar', function () {
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()
    })

    it('Validação de enviado com sucesso', function () {
        cy.get('span[class="success"]')
            .should('be.visible')
    })
})