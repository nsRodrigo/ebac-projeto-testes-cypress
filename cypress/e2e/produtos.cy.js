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
        let qtd = 3;

        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click();
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.mini-cart-items').should('contains.text', qtd)
        cy.get('[class="woocommerce-message"]').should('contains.text', `${qtd} × “Atlas Fitness Tank” foram adicionados no seu carrinho.`)
    });
});