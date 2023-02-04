/// <reference types="Cypress" />

//Variables
const url = './src/index.html'

describe('Envia o formulário com sucesso usando um comando customizado', function () {
    before(() => {
        cy.visit(url)
    })

    it('Comando Customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('Validação de enviado com sucesso', function () {
        cy.get('span[class="success"]')
            .should('be.visible')
    })
})