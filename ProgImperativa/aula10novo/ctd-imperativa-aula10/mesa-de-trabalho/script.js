var letraDaMusica = `
            Domingo, eu vou ao Maracanã
            Vou torcer pro time que sou fã
            Vou levar foguetes e bandeira
            Não vai ser de brincadeira
            Ele vai ser campeão
                   
            Não quero cadeira numerada
            Vou ficar na arquibancada
            Pra sentir mais emoção

            Porque meu time bota pra ferver
            E o nome dele são vocês que vão dizer
            Porque meu time bota pra ferver
            E o nome dele são vocês que vão dizer

            (Ô, ô, ô)
            Ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô Mengo!
            Ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô Mengo!
        `;

function substituirPalavra(){
    var substituir1 = letraDaMusica.replace('Mengo','Barcelona');
    var substituir2 = substituir1.replace('Mengo','Barcelona');
    console.log(substituir2);
}
substituirPalavra()
