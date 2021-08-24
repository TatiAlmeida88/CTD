function IMC(){
    var x = peso/(altura*altura)
    return Math.round(x)
}

function temPlano(){
    if (plano = null) {return 'não possui'}
        else {return 'possui'}
}

var nome = 'José da Silva'
var idade = 27
var peso = 83.5
var altura = 1.70
var plano = 'Ouro'
console.log(nome+' tem '+idade+' anos, seu Índice de massa corporal é de '+IMC()+' e '+temPlano()+' plano.')

var nome = 'Carlos de Souza'
var idade = 28
var peso = 80.1
var altura = 1.76
var plano = 'Diamante'
console.log(nome+' tem '+idade+' anos, seu Índice de massa corporal é de '+IMC()+' e '+temPlano()+' plano.')

var nome = 'Aline Ferreira'
var idade = 33
var peso = 63.7
var altura = 1.53
var plano = null
console.log(nome+' tem '+idade+' anos, seu Índice de massa corporal é de '+IMC()+' e '+temPlano()+' plano.')

var nome = 'Ana Paula'
var idade = 26
var peso = 55.0
var altura = 1.62
var plano = 'Prata'
console.log(nome+' tem '+idade+' anos, seu Índice de massa corporal é de '+IMC()+' e '+temPlano()+' plano.')