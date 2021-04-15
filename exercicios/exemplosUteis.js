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
// essa funcao pd ser expandida para idade por exemplo, cidade, etc
