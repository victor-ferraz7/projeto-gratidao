/* referenciar os elementos */ 
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btElement = document.querySelector('#app button')

var motivos = JSON.parse(localStorage.getItem('lista_motivos')) || []

function renderMotivos(){

    listElement.innerHTML = '';

    for(motivo of motivos){
       var motivoElement = document.createElement('li')
       var motivoText = document.createTextNode(motivo)

       var linkElement = document.createElement('a')
       linkElement.setAttribute('href','#')

       var posicao = motivos.indexOf(motivo)

       var linkText = document.createTextNode(' Retirar')
       linkElement.setAttribute('onclick', 'deleteMotivo(' + posicao + ')')

       linkElement.appendChild(linkText)
       
       motivoElement.appendChild(motivoText)
       motivoElement.appendChild(linkElement)

       listElement.appendChild(motivoElement)
    }
}

renderMotivos();

function addMotivo(){
    var motivoText = inputElement.value;

    motivos.push(motivoText) // inserir no array
    inputElement.value = ''; // apagar o texto do input
    renderMotivos() // renderizar novamente a lista com o novo elemento
    saveToStorage()
}

btElement.onclick = addMotivo;

function deleteMotivo (posicao){
    motivos.splice(posicao, 1) // splice = remove uma quantidade de ítens do array baseado na posição que for passada
    renderMotivos()
    saveToStorage()
}

function saveToStorage (){

    localStorage.setItem('lista_motivos', JSON.stringify(motivos))

}