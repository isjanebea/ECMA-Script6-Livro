


// ex de uso
function imprimirNome(nomeEnt, sobrenomeEnt) {
    let sobrenome = sobrenomeEnt || '';  // ou seja espeficico que pode ser ou sobrenome ou vazio
    let nome = nomeEnt || '' ;  // ou seja espeficico que pode ser ou sobrenome ou vazio
    return `${nome} ${sobrenome}`
}

console.log(imprimirNome('bia'));


function valoresPreDefinidos(a=0, b=1) {
    return a+b;
}

console.log(valoresPreDefinidos(5));


function facaAlgoComMeuNome(nome,	callback	=	z	=>	{
    console.log(z);  // funcao passada como parametro
})	{
    callback(nome); // funcao sendo chamada
}
facaAlgoComMeuNome('Muriel');



