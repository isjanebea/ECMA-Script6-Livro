// proposta de exercicio um sistema que simule uma cesta de mercado

const itens = [
     {
          item : "Arroz",
          valor : 6.32,
          cdb : 0.00001,
     },
     {
          item : "Feijao",
          valor : 8.35,
          cdb : 0.00001,
     },
     {
          item : "Acucar",
          valor : 4.5,
          cdb : 0.00001,
     }     
];


const carrinho = [];


class Produto {
     constructor(nome, valor, cdb) {
               this.item = nome;
               this.valor = valor;
               this.cdb = cdb; // codico de barras
               this.qtd = 0;
               this.total =0;
          }
               add(values) {
                    this.qtd += values;
                    this.total += (this.qtd * this.valor);
                    return this;
          }
}



const addItem = function(item, qtd=1, itemCarrinho) {
     let itemSys = itens.find(produto => { if (produto.item == item) return produto }); // consulta se existe o item nos produtos cadastrados
          if (itemCarrinho) {
               itemCarrinho.add(qtd);
               return carrinho;
          }
               else {
                    carrinho.push(new Produto(itemSys.item, itemSys.valor, itemSys.cdb))
                    return addItem(item, qtd, carrinho[carrinho.length-1]);
               }
}

const valorTotal = function(desc=0) {
     if (carrinho.length==0) return 0;
          else if (carrinho.length==1) return carrinho[0].total(desc);
               else {
               let totalOut = 0;
                carrinho.forEach(produto => totalOut += produto.total);
               return totalOut;
          }
}

const removerItem = function(item) {
     for (var i = 0; i <= carrinho.length-1; i++) {
          if (carrinho[i].item==item) break;
     } // qtd x total
     carrinho.splice(i, i+1);
     return carrinho;
}


addItem("Arroz", 1);
addItem("Feijao", 1);
addItem("Acucar", 4);
//console.log(carrinho)


console.log(valorTotal());


