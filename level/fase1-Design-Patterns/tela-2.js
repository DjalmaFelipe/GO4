let qtdClicks = 0;
const botao = document.getElementById('botao').addEventListener('click', alterarTexto)
const conteudo = document.getElementById('conteudo');
const banner = document.getElementById('banner');

function alterarTexto() {
    if (qtdClicks === 0) {
        conteudo.innerHTML = 'EXISTEM 3 TIPOS DE PADRÔES DE PROJETO.<br><br><br>CRIACIONAIS:<br> Padrões responsáveis por criar os objetos.<br><br>ESTRUTURAIS:<br> lidam com a composição dos objetos e suas estruturas.<br><br>COMPORTAMENTAIS:<br> padrões que definem a forma de comunicação e algoritmos entre os objetos.';
        qtdClicks++;
    } else if (qtdClicks === 1) {
        conteudo.innerHTML = 'Lembre-se, os padrões de projeto que vamos estudar são combinados a linguagens orientadas a objetos, como um CASAMENTO.'
        qtdClicks++;
        banner.style.background = 'url(/images/fases/padrone-noiva.png)';
        banner.style.backgroundSize = 'contain';
        banner.style.backgroundRepeat = 'no-repeat';
        banner.style.width = '40%';
        banner.style.height = '100%';
    } else {
        window.location.href = "design-patterns.html"
    }
}