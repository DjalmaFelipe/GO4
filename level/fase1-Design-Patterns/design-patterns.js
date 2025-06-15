import { dados } from "./dados.js";

let conteudoSegundos = document.getElementById('segundos');
let valorSegundos = parseInt(conteudoSegundos.textContent, 10);
let proximoSegundo = valorSegundos;
let questoesJaAtribuidas = [];
let questaoPermitida = false;
let questaoAtual = -1;
let qtdQuestoes = 0;
let resultadoPorQuestao = []
let qtdQuestoesCorretas = 0;
let pontuacao = 0;

const questao = document.getElementById('questao');
const alternativas_1 = document.getElementById('alternativa-1');
const alternativas_2 = document.getElementById('alternativa-2');
const alternativas_3 = document.getElementById('alternativa-3');
const alternativas_4 = document.getElementById('alternativa-4');

alternativas_1.addEventListener('click', responderAlternativa1);
alternativas_2.addEventListener('click', responderAlternativa2);
alternativas_3.addEventListener('click', responderAlternativa3);
alternativas_4.addEventListener('click', responderAlternativa4);

setInterval(() => {
    if (proximoSegundo >= 0 && proximoSegundo < 10) {
        conteudoSegundos.innerHTML = '0' + proximoSegundo;
        proximoSegundo--;
    }
    else if (proximoSegundo >= 0) {
        conteudoSegundos.innerHTML = proximoSegundo;
        proximoSegundo--;
    } else {
        resultadoPorQuestao.push('não respondida')
        montarQuestao();
    }
     
}, 1000)

function selecionarQuestao() {
    while (questaoPermitida == false) {

        // seleciona um valor aleatorio.
        let selecionaQuestao = Math.floor(Math.random() * (dados.length - 1));

        if (questoesJaAtribuidas.find(valor => valor === selecionaQuestao) === undefined) {
            questaoPermitida = true;
            questaoAtual = selecionaQuestao;
            questoesJaAtribuidas.push(selecionaQuestao);
        }
    }
    // reseta o valor para a próxima chamada.
    questaoPermitida = false;
}

function verificaEncerramentoDasQuestoes() {
    if (qtdQuestoes > 3) {
        window.location.href = 'relatorio.html';
    }
}

function responderAlternativa1(){
    if (dados[questaoAtual].resposta === 1){
        resultadoPorQuestao.push('Resposta Correta');
        qtdQuestoesCorretas++;
        pontuacao += (100 * proximoSegundo);
    } else {
        resultadoPorQuestao.push('Resposta Incorreta');
    }
    montarQuestao();
}
function responderAlternativa2(){
    if (dados[questaoAtual].resposta === 2){
        qtdQuestoesCorretas++;
        resultadoPorQuestao.push('Resposta Correta');
        pontuacao += (100 * proximoSegundo);
    } else {
        resultadoPorQuestao.push('Resposta Incorreta');
    }
    montarQuestao();
}
function responderAlternativa3(){
    if (dados[questaoAtual].resposta === 3){
        qtdQuestoesCorretas++;
        resultadoPorQuestao.push('Resposta Correta');
        pontuacao += (100 * proximoSegundo);
    } else {
        resultadoPorQuestao.push('Resposta Incorreta');
    }
    montarQuestao();
}
function responderAlternativa4(){
    if (dados[questaoAtual].resposta === 4){
        qtdQuestoesCorretas++;
        resultadoPorQuestao.push('Resposta Correta');
        pontuacao += (100 * proximoSegundo);
    } else {
        resultadoPorQuestao.push('Resposta Incorreta');
    }
    montarQuestao();
}

function montarQuestao() {
    conteudoSegundos.innerHTML='20';
    proximoSegundo = 19
    verificaEncerramentoDasQuestoes();
    selecionarQuestao();

    questao.innerHTML = dados[questaoAtual].questao;
    alternativas_1.innerHTML = dados[questaoAtual].alternativas[0];
    alternativas_2.innerHTML = dados[questaoAtual].alternativas[1];
    alternativas_3.innerHTML = dados[questaoAtual].alternativas[2];
    alternativas_4.innerHTML = dados[questaoAtual].alternativas[3];

    qtdQuestoes++;
}


montarQuestao();
