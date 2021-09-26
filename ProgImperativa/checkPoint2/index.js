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

var valorTotal = 0;

let n = 1;

for(let i = 0; i <= produtos.length - 1; i++){
    if(produtos[i].valorDoProduto > 482 && produtos[i].valorDoProduto < 1600 && produtos[i].qualidadeDoProduto > 6 && produtos[i].status == true){
        var carrinho = produtos[i].nomeDoProduto + " - R$" + produtos[i].valorDoProduto;
        console.log("Item " + n + " do carrinho: " + carrinho);
        n++;
        valorTotal = valorTotal + produtos[i].valorDoProduto;
    }
}

console.log("Valor total do carrinho: R$" + valorTotal)