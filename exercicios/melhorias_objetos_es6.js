//  exemplo 1  es5

var nome = 'Maria';
var sobrenome = 'Madalena';

var pessoa = {
    nome: nome,
    sobrenome: sobrenome,
}

console.log(`es5`, pessoa);

// exemplo 2  es6
const nome2 = 'Beatriz';
const sobrenome2 = 'Ramerindo';

const pessoaES6 = { nome2, sobrenome2 };

console.log(`es6`, pessoaES6);

// melhorias nas funcões

const itens = [
    {
        nome,
        sobrenome
    },
    {
        nome2,
        sobrenome2,
    }
]

const pessoaEs6Exemplo2 = {
    nome2,
    sobrenome2,
    seApresentar() {
        console.log(`Ola ${this.nome2} , ${this.sobrenome2}`);
    },

}

pessoaEs6Exemplo2.seApresentar();


// diferencas de JSON x Objetos Literais
// JSON não pode ter função
// JSON o nome da var comeca com maiscula

const Pessoa = {
    usuario: 'Beatriz',
    apelido: 'Janne',
    id: 'asdsdsd'
}

let { usuario } = Pessoa; // Beatriz, seria o mesmo que usuario = Pessoa.usuario;

console.log(usuario);

const { id, apelido } = Pessoa; // multiplos elementos

console.log(id, apelido);


// mudando o nome da variavel
const { apelido: nickname } = Pessoa;

console.log(nickname);

// outro exemplo

const suco = {
    sabor: 'uva',
    quantidade: '500ml'
}

const doce = {
    tipo: 'açucar'
}

function descreveSuco({ sabor, quantidade }, { tipo }) {
    return `Este	suco	é	de	sabor	${sabor}	e	possui	${quantidade}	ado
cicado	com	${tipo}`;
}


console.log(descreveSuco(suco, doce));