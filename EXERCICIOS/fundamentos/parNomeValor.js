// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'; // contexto léxico 2
    return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Marco',
    idade: 15,
    peso: 87,
    endereço: {
        logradouro: 'Rua Abgail Francisca dos Santos',
        numero: 119
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
