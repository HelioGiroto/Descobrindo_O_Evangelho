let lista = document.querySelector('.lista')
let faixa = document.querySelector('#faixa')

// forma os elementos para details e os imprime na tela:
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
    p.classList.add('lato')
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

// toggle para details:
document.querySelectorAll("details").forEach( (d,_,A) =>
  d.addEventListener("toggle", el =>
    d.open && A.forEach(a =>
      a!=el.target && (a.open=false)
    )
  )
)

// toca faixa:
function tocaEpisodio() {
    // obtem o id d-este botao
    let id = this.id

    // carrega o audio e toca:
    faixa.src = `./${id}.mp3`
    faixa.play()

    faixa.controls = true

    // muda todos os bt para play mas este bt para |e:
    let todosBts = document.querySelectorAll('.bt')
    todosBts.forEach(a=>{
        a.src = './play.png'
    })
    this.src = './stop.png'

    // muda a cor somente d-este 
    let todosSummarys = document.querySelectorAll('summary')
    todosSummarys.forEach(a=>{
        a.style.background = 'rgb(5, 74, 105)'
    })
    this.parentNode.firstChild.style.background = 'grey'

    // adiciona evento ao clicar no bt play
    this.removeEventListener('click', tocaEpisodio)
    this.addEventListener('click', stopEpisodio)

    // rola até o topo:
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // toca a faixa correspondente ao bt
    console.log('Faixa: ' + id + '.mp3')
}

// stop faixa:
function stopEpisodio() {
    // stop o play:
    faixa.pause()

    // muda botao para pause
    this.src = './play.png'

    // adiciona evento ao clicar no bt pause
    this.removeEventListener('click', stopEpisodio)
    this.addEventListener('click', tocaEpisodio)

}