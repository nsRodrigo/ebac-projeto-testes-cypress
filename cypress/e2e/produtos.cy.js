/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker';

context('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt').click();
    });

    it('Deve adicionar um produto ao carrinho', () => {
        let qtd = 4;
        let produto = 'Atlas Fitness Tank'

        cy.addProduto(produto, 'M', 'Blue', qtd);
    });
});