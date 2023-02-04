/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Seleciona um arquivo da pasta fixtures', function () {

    before(() => {
        cy.visit(url)
    })

    it('Selecionando um arquivo e valida', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .should('be.visible')
            .selectFile('./cypress/fixtures/example.json')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
})