/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Seleciona um arquivo simulando drag and drop', function () {

    before(() => {
        cy.visit(url)
    })

    it('Selecionando o arquivo simulando drag and drop', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .should('be.visible')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
})