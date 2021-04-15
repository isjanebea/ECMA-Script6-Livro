const [cor1, , cor3, cor4] = ['azul', 'cinza', 'branco', 'preto'];
// ex cor cor 2 vazia
console.log(cor1);


const contatos = [
    {
        nome: 'Alex Júnior',
        numero: '1234-5678'
    },
    {
        nome: 'Carolina Moya',
        numero: '1234-6789'
    },
    {
        nome: 'Fernando Jorge',
        numero: '1234-5567'
    }
];

const [, Carol] = contatos;
// ex nome 1 vazio


console.log(Carol);


function mostraNumero({ numero }) {
    console.log(numero);
}
mostraNumero(Carol);

// indo além
function mostraNumeroDaCarol([, { numero }]) {
    console.log(numero);
}
mostraNumeroDaCarol(contatos);	//	1234-6789


//=============================================
// PARTE 2
//=============================================

const rotas = {
    rapidas: ['Rodovia', 'Estrada	X', 'Estrada	Y']
};

const { rapidas: [rapida] } = rotas;
console.log(rapida);	//	Rodovia
//             0   1
const {rapidas:[,estrada]} = rotas;
console.log(estrada);	//	Estrada



