/// <reference types ="cypress"/>

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login na aplicação com sucesso', () => {
        cy.login('aluno_ebac@teste.com', 'teste@teste.com');
        cy.contains('span', 'Welcome aluno_ebac').should('be.visible');
    });

    it('Deve fazer login na aplicação com sucesso - usando JSON', () => {
        cy.login(perfil.usuario, perfil.senha);
        cy.contains('span', 'Welcome aluno_ebac').should('be.visible');
    });

    it('Deve fazer login na aplicação com sucesso - usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha, { log: false });
            cy.contains('span', 'Welcome aluno_ebac').should('be.visible');
        });
    });

    it('Deve exibir mensagem de erro ao tentar logar com email inválido', () => {
        cy.login('ebactesteebac@teste.com', 'teste@teste.com');
        cy.get('ul[class="woocommerce-error"] li').should('contain.text', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });

    it('Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
        cy.login('ebac@teste.com', 'teste@teste.com');
        cy.get('ul[class="woocommerce-error"] li').should('contain.text', 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?');
    });

});