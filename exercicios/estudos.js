// exercicio 1
// proposta de exercicio um sistema que simule uma sexta de mercado

var frutas = new Array("Maça", "Pera", "Uva", ".");

for (let inFrutas = 0; inFrutas <= frutas.length ; inFrutas++) {
      console.log(frutas[inFrutas])
}

//  Alternativa

frutas.forEach(function(fruta) {
     console.log(fruta)
})


// adiciona frutas a lista
frutas.push("Banana", "Abacaxi")


// metodo alternativo 2

frutas.forEach(fruta => {
    console.log(fruta)
})



// e se prescisar alterar o conteudo de uma Array?  Ou acrescentar uma informação?
numeros = [1, 5, 7, 13]

dobroNumeros = numeros.map(function(numero) {
       return numero * 2;
})

console.log(numeros, dobroNumeros)


// alterar um dado
frutas = frutas.map(function(fruta) {
  if (fruta == ".")
  return "abacate"
  else
  return fruta
})

console.log(frutas)


// acrescentar informação

frutas = frutas.map(function(fruta) {
      return fruta + "_organica"
})

console.log(frutas)

// remover um dado
frutas = frutas.splice(1, frutas.length);
console.log(frutas)

// maneira mais eficiente?  metodo que encontrei 
// somente splice anta...

function removerItem(item, obj) {
var frutasNovaLista = new Array("index");
    for (var i = 0; i <= obj.length; i++) {
            let inObj = obj[i];
               if (inObj != item) // tudo que for diferente do item será incorporado ao array
                frutasNovaLista.push(inObj)
            }
        return frutasNovaLista.splice(1, frutasNovaLista.length-2) // apenas retorna elementos reais...
    }
frutas = removerItem("Uva_organica", frutas);
console.log(frutas)

// uso do filter

var produtos = [
    {item : "acucar", custo: 5}, 
    {item : "cafe", custo: 7}, 
    {item : "arroz", custo: 12}, 
]

produtosMaiorQue5 = produtos.filter(function(produto) {
    return produto.custo > 5
})
console.log(produtosMaiorQue5)


// outro exemplo

var encontrarProduto = produtos.filter(function(produto) {
     return produto.item == "arroz"  // me retorna um array com todos os intens dentro da condição
})



console.log('filter' , encontrarProduto)  // retorna um array

// mais adquado

var encontrarProdutoFind = produtos.find(function(produto) {
  return produto.item == "arroz";
})

console.log(`find ${encontrarProdutoFind}`) // retorna o objeto


// retorna true ou false

var existeProduto = produtos.every(function(produto) {
    return produto.item == "arroz" // retorna true/false
})

console.log(existeProduto)

// retorna true ou false e interrompe o loop caso encontre um valor verdadeiro
var	pesoDasMalas	=	[12,32,21,29];
var	temMalaAcimaDoPeso	=	pesoDasMalas.some(function(pesoDaMala) {
		return	pesoDaMala	>	30;
});
console.log(temMalaAcimaDoPeso) // retorna true

/*
A	função	 auxiliar	 	reduce		 foi	 deixada	 para	 o	 final	 por	 ser	 a
mais	complicada.	A	ideia	por	 trás	dela	é	pegar	 todos	 os	valores	de
um	 	Array		 e	 condensá-los	 em	 um	 único
*/
var soma = 0;
pesoDasMalasTotal = pesoDasMalas.reduce(function(soma, peso) {
    return soma + peso;
}, 0) // valor inicial 0

console.log(pesoDasMalasTotal)


// outro exemplo
var	alunos	=	[
    {nome:'joão',	idade:	10},
    {nome:'josé',	idade:	20},
    {nome:'marcos',	idade:	30}
];
var	nomes	=	alunos.reduce(function(arrayNomes,	aluno) {
    arrayNomes.push(aluno.nome);
    return	arrayNomes;
},	[]); // valor inicial uma array

console.log(nomes)


// Map   - aceita valores como function, objetos, numeros...

/* Serve como se fosse um objeto com controle... */

mapa = new Map();

function fMap() {
    console.log('a')
}



mapa.set(fMap, "funcao teste")

console.log(mapa.get(fMap))

/*
  mapa.has(chave)  -  localiza uma chave e retorna true/flase
  mapa.get(chave) - retorna um valor
  mapa.delete(chave) - deleta uma chave
  mapa.clear() - zera o mapa
*/

var	mapa	=	new	Map();
//        chave, valor
mapa.set('um',	1);
mapa.set('dois',	2);
mapa.set('três',	3);


console.log(mapa.get("um"))

// retorna o valor
//  lembrando  of percorre tipo igual... 
for(var	chave	of	mapa.keys()){
	 console.log(chave);	//	um	dois	três
}


for(var	valor	of	mapa.values()){
    console.log(valor) // 1 2 3 
}

for(var entrada of mapa.entries()) {
    console.log(entrada) // []
}


// Set - metodo      // na pratica, melhor continuar usando o array... 


var  alunas = ["Pedro", "Joaquim", "Fernando", "Elisabeth"]

var listaAlunas = new Set(alunas);

console.log(listaAlunas.has("Fernando"))


listaAlunas.add("Beatriz")

console.log(listaAlunas)

listaAlunas.delete("Joaquim")

console.log(listaAlunas)



// desestruturar
const user = {
    nome: 'Diego',
    empresa: {
      nome: 'RocketSeat',
      site: 'www.rocketseat.com.br'
    }
  };
  
  let { nome } = user;
  
  console.log(nome); // Diego
  
  let { empresa: { site } } = user;
  
  console.log(site);

