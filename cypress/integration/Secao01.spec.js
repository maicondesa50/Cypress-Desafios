/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica o título da aplicação', function () {
        cy.visit('./src/index.html').get('input').should('be.visible')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
})

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {

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

        const longtext = 'Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste'
        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(longtext, { delay: 0 })
            .should('have.value', longtext)


        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        cy.get('span[class="sucess"]')
            .should('be.visible')

    })
})