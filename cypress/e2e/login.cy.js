/// <reference types="cypress" />

const user = Cypress.env('username')
const senha = Cypress.env('password')

context('Funcionalidade login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type(user)
        cy.get('#password').type(senha)
        cy.get('[name="login"]').click()
        cy.get('h1:contains(Minha conta)')
        cy.get('.woocommerce-MyAccount-content').should('contain.text', 'Olá, rodrigo.nascim.silva (não é rodrigo.nascim.silva? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('teste@qaaa.com')
        cy.get('#password').type(senha)
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain.text', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type(user)
        cy.get('#password').type('b')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain.text', 'Erro: a senha fornecida para o e-mail rodrigo.nascim.silva@qa.com está incorreta. Perdeu a senha?')
    });

});