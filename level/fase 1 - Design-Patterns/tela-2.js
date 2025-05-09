const botao = document.getElementById('botao').addEventListener('click', alterarTexto)
const conteudo = document.getElementById('conteudo');

function alterarTexto() {
    conteudo.innerHTML = 'EXISTEM 3 TIPOS DE PADRÔES DE PROJETO.<br><br><br>CRIACIONAIS:<br> Padrões responsáveis por criar os objetos.<br><br>ESTRUTURAIS:<br> lidam com a composição dos objetos e suas estruturas.<br><br>COMPORTAMENTAIS:<br> padrões que definem a forma de comunicação e algoritmos entre os objetos.';
}