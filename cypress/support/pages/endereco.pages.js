class EnderecoPage {

    editarEnderecoFaturamento(nome, sobreNome, nomeEmpresa, pais, endereco, numero, cidade, estado, cep, telefone) {
        cy.get('li[class*="edit-address"] a').click();
        cy.contains('h3', 'Billing Address').parent().find('[class="edit"]').click();
        cy.get('#billing_first_name').clear().type(nome);
        cy.get('#billing_last_name').clear().type(sobreNome);
        cy.get('#billing_company').clear().type(nomeEmpresa);
        cy.get('#select2-billing_country-container').click().type(`${pais}{enter}`);
        cy.get('#billing_address_1').clear().type(endereco);
        cy.get('#billing_address_2').clear().type(numero);
        cy.get('#billing_city').clear().type(cidade);
        cy.get('#select2-billing_state-container').click().type(`${estado}{enter}`)
        cy.get('#billing_postcode').clear().type(cep);
        cy.get('#billing_phone').clear().type(telefone);
        cy.get('[name="save_address"]').click();
        cy.contains('div', 'Endereço alterado com sucesso.').should('be.visible');
    }

    editarEnderecoEntrega() {
        cy.get('li[class*="edit-address"] a').click();
        cy.contains('h3', 'Shipping Address').parent().find('[class="edit"]').click();
    }
}
export default new EnderecoPage()