/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 03
describe('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
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

    it('Meio de contato preferencial', function () {
        cy.get('input[id="phone-checkbox"]')
            .should('be.visible')
            .check()
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