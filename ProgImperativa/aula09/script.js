var numeros = [1,2,3,5,8,13,21,34,55,89];

//Método .map com função anônima 
var copiaDosNumeros = numeros.map(function(valor, indice){
    console.log(valor);
    console.log(indice);
});

//Método .map com função escrita antes
function dobrarValor(valor){
    return valor*2;
}

var valoresDobrados = numeros.map(dobrarValor);
console.log(valoresDobrados);

//Método .filter com função anônima
var maiorQueDez = numeros.filter(function(valor){
    return valor>10;
});

console.log(maiorQueDez);