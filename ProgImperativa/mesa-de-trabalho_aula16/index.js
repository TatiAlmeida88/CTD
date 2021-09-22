/*
    Atividade: Crie uma calculadora

    Atividade I: Crie operações matemática para a calculadora.
    O controlador deve ser capaz de:
    (x) Multiplicar;
    (x) Dividir;
    (x) Somar;
    (x) Subtrair.
    
    Obs.: Crie um módulo chamado operações.js contendo as funções de callback.

    Atividade II: Crie uma função para resetar a calculadora.
    (  ) A função deve ser capaz de zerar o valor acumulado.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Atividade Bônus: Crie uma função para guardar as operações matemáticas
    (  ) A função deve guardar cada operação matemática e retornar as operações acumuladas.
    (  ) Imprima na tela as operações matemáticas realizada com o resultado final.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Exemplo: 2 * 2 + 3 / 4 - 1 = 0.75

*/

const Calculadora = require('./modulos/calculadora');

const Operacoes = require('./modulos/operacoes');


const app = new Calculadora();

const oper = new Operacoes();


console.log('Resultado multiplicação:',app.calcular([5,3],oper.multiplicar));
console.log('Resultado acumulado divisão:',app.calcular([25,5],oper.dividir));
console.log('Resultado acumulado soma:',app.calcular([8,2],oper.somar));
console.log('Resultado acumulado subtração:',app.calcular([20,30],oper.subtrair));
console.log('Zerando a calculadora:');
console.log('Operações:');
console.log('Operações = resultado:');