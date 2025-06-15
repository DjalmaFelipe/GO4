const gamby = document.getElementById('gamby');
const padrone = document.getElementById('padrone');

const btnPular = document.getElementById('pular').addEventListener('click', pular);

function pular(){
    window.location.href = "../../menu/menu.html";
}

gamby.addEventListener('click', mudarParaTelaDoGamby);
padrone.addEventListener('click', mudarParaTelaDoPadrone);

function mudarParaTelaDoGamby() {
    window.location.href = './personagens/gamby.html';
}
function mudarParaTelaDoPadrone() {
    window.location.href = './personagens/padrone.html';
}