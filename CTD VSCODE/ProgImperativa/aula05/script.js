/*
    Matemáticos (valores aritmeticos para números)
    + mais
    - menos
    * vezes
    / divido
    % resto da divisão
    ** potência

    Lógicos - responder verdeiro (true) ou falso (false)
    < maior
    > menor
    <= menor ou igual
    >= maior ou igual
    == é igual?
    === é igual mesmo? 
    !=  é diferente de?

    Condicionais (ternários)
    [condição] ? [caso seja veradeiro] : [caso seja falso]
    Exemplo: 4 > 6 ? 'É maior' : 'É menor'

*/


//Função com parâmetro - saudação é um parâmetro, precisa ser preenchido para que a função seja executada
// Cada função tem um único objetivo
function saudar(mensagem, nomeDoUsuario) {
    alert(mensagem + ' ' + nomeDoUsuario);
}

//Métodos:
saudar('Olá')
saudar('Oi')
saudar('Seja bem-vindo')


// Declaração (criando a função)
function cumprimentar() {
    // Todo seu código fica aqui!
    alert('Olá');
}

// Invocação (chamando a função)
cumprimentar(); //Essa execução se chama método