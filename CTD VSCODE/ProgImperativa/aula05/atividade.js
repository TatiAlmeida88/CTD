var nomeUsuario = prompt('Qual seu nome?')

function cotacao(){
    var dolar = prompt('Quantos dólares gostaria de cotar?')
    var reais = dolar*5.6
    if (window.confirm('Você gostaria de cotar US$'+dolar+' ?')){
        alert('Olá, '+nomeUsuario+', US$ '+dolar+' valem R$ '+reais+' hoje.')
    }
        else {
            cotacao()
        }
}

cotacao ()

setTimeout(() => {
    window.location.href = 'https://www.cotacao.com.br'
}, 5000);
