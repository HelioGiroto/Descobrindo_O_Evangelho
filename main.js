let lista = document.querySelector('.lista')

episodios.map(a => {
    // cria elementos
    let details = document.createElement('details')
    let summary = document.createElement('summary')
    let p = document.createElement('p')
    let botao = document.createElement('img')

    // cria texto dos elementos
    let textoSummary = document.createTextNode(a.titulo)
    let textoP = document.createTextNode(a.descricao)

    // associa texto aos elementos
    summary.appendChild(textoSummary)
    p.appendChild(textoP)

    // insere algumas classes de CSS e src para os elementos
    p.classList.add('pDetails')
    botao.src = './play.png'
    botao.classList.add('bt')
    botao.id = a.arquivo.replace('\.mp3', '')
    botao.addEventListener('click', tocaEpisodio)

    // insere summary e p dentro do details
    details.appendChild(summary)
    details.appendChild(p)
    details.appendChild(botao)

    // Insere details ao seu elemento pai
    lista.appendChild(details)

})


function tocaEpisodio(){
    // muda botao para pause

    // adiciona id ao bt pause

    // adiciona evento para pausar ao bt pause

    // obtem o id d-este botao
    let id = this.id

    // toca a faixa correspondente ao bt
    console.log('Faixa: ' + id + '.mp3')
}


function pausaEpisodio(){

}
