/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker';

context('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it.only('Deve completar o pré-cadastro com sucesso', () => {
        let nome = faker.person.firstName();
        let sobreNome = faker.person.lastName();
        let emailFaker = faker.internet.email({ nome, sobreNome });
        let password = faker.internet.password();

        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type(password);
        cy.get('input[value="Register"]').click();
        cy.contains('a', 'Detalhes da conta').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobreNome);
        cy.get('#account_email').should('have.value', emailFaker);
        cy.get('button[class="woocommerce-Button button"]').click();
        cy.contains('div', 'Detalhes da conta modificados com sucesso.').click();
    });
});