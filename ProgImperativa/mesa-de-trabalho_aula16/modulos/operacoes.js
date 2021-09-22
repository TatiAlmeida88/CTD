function Operacoes(){

    this.somar = function(valores){
        var resultadoDaSoma = valores.reduce((valorAcumulado, valorFinal)=>valorAcumulado+valorFinal);
        return resultadoDaSoma;
    }

    this.subtrair = function(valores){
        var resultadoDaSubtração = valores.reduce((valorAcumulado, valorFinal)=>valorAcumulado-valorFinal);
        return resultadoDaSubtração;
    }

    this.multiplicar = function(valores){
        var resultadoDaMultiplicacao = valores.reduce((valorAcumulado, valorFinal)=>valorAcumulado*valorFinal);
        return resultadoDaMultiplicacao;
    }

    this.dividir = function(valores){
        var resultadoDaDivisão = valores.reduce((valorAcumulado, valorFinal)=>valorAcumulado/valorFinal);
        return resultadoDaDivisão;
    }
}

module.exports = Operacoes;