/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Seleciona um arquivo ultilizando uma fixture para a qual foi dada um alias', function () {

    before(() => {
        cy.visit(url)
    })

    it('Selecionando o arquivo dado um alias', function () {
        cy.fixture('example.json').as('samplesFile')

        cy.get('input[type="file"]')
            .should('not.have.value')
            .should('be.visible')
            .selectFile('@samplesFile', { action: 'drag-drop' })
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
})