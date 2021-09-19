var contaBancaria = {
    nome: "Tatiana",
    sobrenome: "Almeida",
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    },
    agencia: 3030,
    conta: 123456,
    saldoAtual: 100,
};

module.exports = contaBancaria;