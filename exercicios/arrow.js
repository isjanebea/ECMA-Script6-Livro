const soma = (cb, ...a) => {
    if (cb && a) {
        cb(a.reduce((xa, xb) => xa+xb));
    }
    else if (a) {
        a.reduce(a.reduce((xa, xb) => xa+xb))
    }
}

// aotmaticamente retorna o return
soma(resultado => console.log(resultado), 0);


class Tabuada {

    constructor(numero, ...valores) {
        this.numero = numero;
        this.valores = valores;
    }

    get tabela() {
        return this.valores.map(valor => this.numero * valor);
    }
}

let x = new Tabuada(2, 2,3,4,5,6,7,8)
console.log(x.tabela);