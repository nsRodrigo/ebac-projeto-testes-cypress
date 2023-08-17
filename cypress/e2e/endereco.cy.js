/// <reference types ="cypress"/>

const perfil = require('../fixtures/perfil.json')

import enderecoPages from '../support/pages/endereco.pages';
import { enderecoFaker } from '../fixtures/perfil';


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha, { log: false });
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        enderecoPages.editarEnderecoFaturamento(
            enderecoFaker.nome,
            enderecoFaker.sobreNome,
            enderecoFaker.nomeEmpresa,
            enderecoFaker.pais,
            enderecoFaker.endereco,
            enderecoFaker.numero,
            enderecoFaker.cidade,
            enderecoFaker.estado,
            enderecoFaker.cep,
            enderecoFaker.telefone,
        )
    });
});