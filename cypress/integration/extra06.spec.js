/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

/// Desafio extra 06
describe('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', function () {
    before(() => {
        cy.visit(url)
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