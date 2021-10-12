var produtos = [

    {
        nomeDoProduto: "tablet",
        valorDoProduto: 1000,
        qualidadeDoProduto: 7,
        status:true
    },

    {
        nomeDoProduto: "celular",
        valorDoProduto: 800,
        qualidadeDoProduto: 5,
        status: true
    },

    {
        nomeDoProduto: "televisão",
        valorDoProduto: 2500,
        qualidadeDoProduto: 8,
        status: true
    },

    {
        nomeDoProduto: "vídeo-game",
        valorDoProduto: 1300,
        qualidadeDoProduto: 10,
        status: true
    },

    {
        nomeDoProduto: "notebook",
        valorDoProduto: 1500,
        qualidadeDoProduto: 7,
        status: false
    }
]

let carrinho = produtos.filter(function(item){
    return item.valorDoProduto > 482 && item.valorDoProduto < 1600 && item.qualidadeDoProduto > 6 && item.status == true;
});


let valorTotal = 0;

for (let i = 0; i <= carrinho.length - 1; i++){
    valorTotal = valorTotal + carrinho[i].valorDoProduto;
}

console.log("Os seguintes itens estão no carrinho:");

for (let i = 0; i <= carrinho.length - 1; i++){
    let n = i+1;
    console.log("Item " + n + ": " + carrinho[i].nomeDoProduto + " - Valor: " + carrinho[i].valorDoProduto);
}

console.log("O valor total dos produtos do carrinho é de R$" + valorTotal);


