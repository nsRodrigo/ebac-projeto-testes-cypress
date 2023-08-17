import { fakerPT_BR as faker, fakerPT_BR } from '@faker-js/faker'

export const enderecoFaker = {
    nome: faker.person.firstName('male'),
    sobreNome: faker.person.lastName('male'),
    nomeEmpresa: faker.company.name(),
    pais: 'Brasil',
    endereco: faker.location.streetAddress(),
    numero: faker.location.buildingNumber(),
    cidade: fakerPT_BR.location.city(),
    estado: faker.location.state(),
    cep: faker.location.zipCode('#####-###'),
    telefone: faker.phone.number('+55##########'),
};
