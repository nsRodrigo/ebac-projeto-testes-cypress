/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker';

context('Funcionalidade Pré-Cadastro', () => {

    let nome = faker.person.firstName();
    let sobreNome = faker.person.lastName();
    let emailFaker = faker.internet.email({ nome, sobreNome });
    let password = faker.internet.password();

    beforeEach(() => {
        cy.visit('minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it.only('Deve completar o pré-cadastro com sucesso', () => {
        cy.preCadastro(emailFaker, password, nome, sobreNome)
    });
});