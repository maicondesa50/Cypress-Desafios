/// <reference types="Cypress"/>

const url = './src/index.html'

describe('Marcando e desmarcando check box', function () {

    before(() => {
        cy.visit(url)
    })

    it('Marcando todos so com um check', function () {
        cy.get('input[type="Checkbox"]')
            .should('be.visible')
            .check()
    })

    it('Marcando ambos e desmarcando o ultimo', function () {
        cy.get('input[type="checkbox"]')
            .should('be.visible')
            .each(function ($checkbox) {
                cy.wrap($checkbox)
                    .check()
                    .should('be.checked')
            })

        cy.get('input[type="checkbox"]')
            .last()
            .should('be.visible')
            .uncheck()
            .should('not.be.checked')
    })

})