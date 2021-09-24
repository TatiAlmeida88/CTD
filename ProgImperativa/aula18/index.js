const express = require('express');

const aplicativo = new express();

aplicativo.get('/',function(requisicaoAoServidor,respostaAoServidor){
    return respostaAoServidor.sendFile(__dirname + '/index.html')
});

aplicativo.listen(1234);