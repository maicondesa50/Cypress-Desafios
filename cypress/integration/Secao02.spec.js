/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica o título da aplicação', function () {
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
})

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica se os campos da aplicação estão visiveis', function () {
        cy.visit('./src/index.html').get('input#firstName').should('be.visible')
        cy.visit('./src/index.html').get('input#lastName').should('be.visible')
        cy.visit('./src/index.html').get('input#email').should('be.visible')
        cy.visit('./src/index.html').get('input#phone').should('be.visible')
    })
})