/// <reference types ="cypress"/>

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login na aplicação com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('input[value="Login"]').click();
        cy.contains('span', 'Welcome aluno_ebac').should('be.visible');
    });

    it('Deve exibir mensagem de erro ao tentar logar com email inválido', () => {
        cy.get('#username').type('ebactesteebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('input[value="Login"]').click();
        cy.get('ul[class="woocommerce-error"] li').should('contain.text', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });

    it('Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
        cy.get('#username').type('ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('input[value="Login"]').click();
        cy.get('ul[class="woocommerce-error"] li').should('contain.text', 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?');
    });

});