// novo recurso do ES2015

const pessoa = {
    nome: 'Marco',
    idade: 15,
    endereço: {
        logradouro: 'Rua da Alegria',
        numero: 1000
    }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemhumorado = false } = pessoa;
console.log(sobrenome, bemhumorado);

const { endereço: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

const { conta: { ag, num } } = pessoa;
console.log(ag, num);