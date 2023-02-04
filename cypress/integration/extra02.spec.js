/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 03
describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
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
            .type('maicongdsa')
            .should('have.value', 'maicongdsa')
    })

    it('Como podemos te ajudar', function () {
        const longtext = 'Teste, teste, teste, Teste,'
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

    it('Validação de enviado com erro', function () {
        cy.get('span[class="error"]')
            .should('be.visible')
    })
})