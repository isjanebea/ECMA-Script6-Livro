const alunos = [
    {
        nome : "Ana",
        sobrenome : "Santos"
    },
    {
        nome : "Ana",
        sobrenome : "Souza"
    },    
    {
        nome : "Ana",
        sobrenome : "Costa"
    },
]

const nome = "Ana";
const resultadosFind = alunos.find(function(element) {
    return element.nome == nome;
});

console.log('find', resultadosFind);

const resultadosFilter = alunos.filter(function(element) {
    return element.nome == nome;
});

console.log('filter', resultadosFilter);


console.log(resultadosFilter[0])