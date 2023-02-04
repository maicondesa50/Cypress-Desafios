/// <reference types="Cypress" />


/// Desafio extra 01
describe('Central de Atendimento ao Cliente TAT', function () {
    before(() => {
        cy.visit('./src/index.html')
    })

    it('Preencha o Nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .should('have.value', 'Maicon')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .should('have.value', 'De Sa')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa@gmail.com')
            .should('have.value', 'maicongdsa@gmail.com')
    })

    it('Como podemos te ajudar', function () {
        const longtext = 'Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste'
        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(longtext, { delay: 0 })
            .should('have.value', longtext)
    })

    it('Botão enviar', function () {
        cy.contains('button', 'Enviar')
            .should('be.visible')
            .click()
    })

    it('Validação de enviado com sucesso', function () {
        cy.get('span[class="success"]')
            .should('be.visible')
    })

})

/// Desafio extra 02
describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Preencha o Nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .should('have.value', 'Maicon')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .should('have.value', 'De Sa')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa')
            .should('have.value', 'maicongdsa')
    })

    it('Como podemos te ajudar', function () {
        const longtext = 'Teste, teste, teste, Teste,'
        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(longtext, { delay: 0 })
            .should('have.value', longtext)
    })

    it('Botão enviar', function () {
        cy.contains('button', 'Enviar')
            .should('be.visible')
            .click()
    })

    it('Validação de enviado com erro', function () {
        cy.get('span[class="error"]')
            .should('be.visible')
    })

})

/// Desafio extra 03
describe('Valida telefone', function () {

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Valida se o telefone é int', function () {
        const phoneNumber = '993005943'
        cy.get('input[id="phone"]')
            .type('abcdf')
            .should('have.value', '')
    })

})

/// Desafio extra 04
describe('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Preencha o Nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .should('have.value', 'Maicon')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .should('have.value', 'De Sa')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa')
            .should('have.value', 'maicongdsa')
    })

    it('Como podemos te ajudar', function () {
        const longtext = 'Teste, teste, teste, Teste,'
        cy.get('textarea[id="open-text-area"]')
            .should('be.visible')
            .type(longtext, { delay: 0 })
            .should('have.value', longtext)
    })

    it('Meio de contato preferencial', function () {
        cy.get('input[id="phone-checkbox"]')
            .should('be.visible')
            .click()
    })

    it('Botão enviar', function () {
        cy.contains('button', 'Enviar')
            .should('be.visible')
            .click()
    })

    it('Validação de enviado com erro', function () {
        cy.get('span[class="error"]')
            .should('be.visible')
    })

})

/// Desafio extra 05
describe('preenche e limpa os campos nome, sobrenome, email e telefone', function () {

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Preenche e limpa o Campo nome', function () {
        cy.get('input[id="firstName"]')
            .should('be.visible')
            .type('Maicon')
            .clear()
            .should('have.value', '')
    })

    it('Preencha o Sobrenome', function () {
        cy.get('input[id="lastName"]')
            .should('be.visible')
            .type('De Sa')
            .clear()
            .should('have.value', '')
    })

    it('Preencha o E-mail', function () {
        cy.get('input[id="email"]')
            .should('be.visible')
            .type('maicongdsa')
            .clear()
            .should('have.value', '')
    })

    it('Preenche e limpa o Campo nome', function () {
        const phoneNumber = '993005943'
        cy.get('input[id="phone"]')
            .type('phoneNumber')
            .clear()
            .should('have.value', '')
    })
})

/// Desafio extra 06
describe('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', function () {

    before(() => {
        cy.visit('./src/index.html')
    })

    it('Botão enviar', function () {
        cy.contains('button', 'Enviar')
            .should('be.visible')
            .click()
    })

    it('Validação de enviado com erro', function () {
        cy.get('span[class="error"]')
            .should('be.visible')
    })

})

/// Desafio extra 07
describe('Envia o formulário com sucesso usando um comando customizado', function () {
    before(() => {
        cy.visit('./src/index.html')
    })

    it('Comando Customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('Validação de enviado com sucesso', function () {
        cy.get('span[class="success"]')
            .should('be.visible')
    })
})