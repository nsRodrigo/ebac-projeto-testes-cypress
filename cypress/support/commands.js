Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
    cy.get('input[value="Login"]').click();
});

Cypress.Commands.add('preCadastro', (emailFaker, password, nome, sobreNome) => {
    cy.get('#reg_email').type(emailFaker);
    cy.get('#reg_password').type(password);
    cy.get('input[value="Register"]').click();
    cy.contains('a', 'Detalhes da conta').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobreNome);
    cy.get('button[class="woocommerce-Button button"]').click();
    cy.contains('div', 'Detalhes da conta modificados com sucesso.').click();
});

Cypress.Commands.add('addProduto', (produto, tamanho, cor, qtd) => {
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get(`.button-variable-item-` + tamanho).click()
    cy.get(`.button-variable-item-` + cor).click()
    cy.get('.input-text').clear().type(qtd)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.mini-cart-items').should('contains.text', qtd)
    cy.get('[class="woocommerce-message"]').should('contains.text', `${qtd} × “${produto}” foram adicionados no seu carrinho.`)
});
