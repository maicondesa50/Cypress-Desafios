Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {

    const textComoPodemosAjudar = 'Quero ajuda!'

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
        .type(textComoPodemosAjudar, { delay: 0 })
        .should('have.value', textComoPodemosAjudar)

    cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()
})