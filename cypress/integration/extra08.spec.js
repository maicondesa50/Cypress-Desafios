/// <reference types="Cypress" />

const url = './src/index.html'
const textArea = 'Inserindo texto aqui'

describe('Usando o Contains', function () {
    before(() => {
        cy.visit(url)
    })

    it('Contains', function () {

        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .should('have.value', 'Maicon')

        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .should('have.value', 'De Sa')

        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa@gmail.com')
            .should('have.value', 'maicongdsa@gmail.com')

        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(textArea, { delay: 0 })
            .should('have.value', textArea)

        cy.contains('button', 'Enviar')
            .should('be.visible')
            .click()

        cy.get('span[class="success"]')
            .should('be.visible')
    })
})