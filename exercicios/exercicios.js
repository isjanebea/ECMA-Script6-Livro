
/*
## Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.

``` javascript
var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}


*/
let numeros = [0, 1, 2, 3, 4, 5];
let log = [];
numeros.forEach(numero => {
    if (numero % 2 === 0) {
        log.push("par");
    }
    else
        log.push("impar")
});

console.log(`Exercicio 1 + ${log}`)



// dobrar uns numero de um array
let dobrar = numeros.map(numero => {
    return numero * 2;
})
console.log(dobrar);


/*
# Exercício 3 - NÃO ESTOU BRAVO
Escreva o método `caps` que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.
*/

let frases = ["Oie", "tudo bem?", "como vai?"];

frases = frases.map(frase => {
    return frase.toLocaleUpperCase();
})

console.log(frases);


/*
## Exercício 4 - Equilibrio de parênteses
Utilizando a função auxiliar `reduce`, escreva uma função chamada `validaParenteses` que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma `string` e retornar um valor booleano (true ou false).
*/



// ## Exercício 5 - Sem duplicações
// Faça uma função chamada `removeDuplicatas` que recebe um array de números inteiros e remove todas as suas duplicadas.

// Utilize as funções auxiliares: `reduce` e `find`.

// * Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]
duplos = [1, 2, 3, 2, 2, 3, 4, 5, 7, 8, 8, 8, 8, 9];
var numeross = duplos.reduce(function (arrayNumeros, numero) {
    let numeroEx = arrayNumeros.find(function (arrNum) {
        return arrNum == numero;
    });
    if (!numeroEx) {
        arrayNumeros.push(numero);
    }
    return arrayNumeros;
}, []); // valor


console.log(numeross)


var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];


reprovados = alunos.filter(aluno =>  aluno.media < 6  );
console.log(reprovados);


var listaNome = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 },
    { nome: 'Erick', sobrenome: 'Santos', idade: 20 }
]

function buscaBurra(valorDaProriedade="Erick", nomeDaPropriedade="nome", lista=listaNome) {
    return lista.find(obj => obj[nomeDaPropriedade]== valorDaProriedade)
}

console.log(buscaBurra())


function busca(valorDaProriedade="Erick", nomeDaPropriedade="nome", lista=listaNome) {
    return lista.filter(obj => obj[nomeDaPropriedade] == valorDaProriedade) ;
}

console.log(busca());


function calcularTudoObj(obj=[
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]) {  // escopo da funcao
    return obj.reduce((a, b) => a + (b.altura * b.comprimento), 0);
  }

  // falta um tratamento com para valor 1 com f
  
  console.log(calcularTudoObj())


  // Math.pow(5,3);
//   ## Exercício 9 - Raízes quadradas
// Crie uma função chamada `calculaRaizesQuadradas` que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

// * para este exercício, assuma que a entrada terá somente números com raiz exata.
// * utilize a função Math.sqrt para calcular a raiz quadrada

var raizesIn = [Math.pow(5,2),  Math.pow(9,2), Math.pow(3,2), Math.pow(4,2)]

raizesOut = raizesIn.map(raiz => Math.sqrt(raiz));
console.log(raizesIn, "=>", raizesOut);