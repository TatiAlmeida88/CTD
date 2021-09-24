//Aula 16 - Arrow function, callback e javadoc.

//ARROW FUNCTION:

var temIdadeParaBeber = function(idade){
    return idade >= 18;
} //Função tradicional

var temIdadeParaBeber = idade => idade >= 18; //Arrow function

/*************/

function numAleatorio(){
    return Math.random();
} //Função tradicional

var numAleatorio = () => Math.random; //Arrow function

/*************/

function funcaoTradicional(){
    return this; //global
}

var arrowFunction = () => this; //variável, acima

console.log("Função tradicional ",funcaoTradicional());
console.log("Função arrow function ",arrowFunction());

//CALLBACK:

/**
 * Função responsável por calcular como calculadora
 * @param {number[]} valores Valores que deseja calcular
 * @param {(valores:number[])=>number} operacoes Operação a ser realizada
 * @returns 
 */

function calculadora(valores, operacoes){
    return operacoes(valores);
}

function somar(valores){
    var resultadoDaSoma = valores.reduce((valorAcumulado, valorFinal) => valorAcumulado+valorFinal);
    return resultadoDaSoma;
}

function multiplicar(valores){
    var resultadoDaMultiplicacao = valores.reduce(function(valorAcumulado, valorFinal){
        return valorAcumulado*valorFinal;
    });
    return resultadoDaMultiplicacao;
}

console.log(calculadora([2,2,2],somar));
console.log(calculadora([3,3],multiplicar));