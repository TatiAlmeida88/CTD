/*
    (x) Atividade I: Converta o documento html para javascript
    (x) Atividade II: Converta objeto literal em função construtora
    (x) Atividade III: Divida o código em módulo
    (x) Atividade IV: Importe o módulo para o documento principal
*/

var contaBancaria = require("./contaBancaria");

console.log(`Agora seu saldo atual é de R$ ${contaBancaria.saldoAtual}!`);

var valorDeposito = 20;

contaBancaria.saldoAtual = contaBancaria.saldoAtual + valorDeposito;

console.log(`Você depositou R$${valorDeposito}! Agora seu saldo atual é de R$${contaBancaria.saldoAtual}!`);

var valorSaque = 20;

if (valorSaque < contaBancaria.saldoAtual){
    contaBancaria.saldoAtual = contaBancaria.saldoAtual - valorSaque;
    console.log(`Você sacou R$${valorSaque}! Agora seu saldo atual é de R$${contaBancaria.saldoAtual}!`);
}
    else{
        console.log(`Saldo insuficiente! Seu Saldo Atual é de R$${contaBancaria.saldoAtual}!`)
    }

var contaBancariaJson = JSON.stringify(contaBancaria);
console.log (contaBancariaJson);

    