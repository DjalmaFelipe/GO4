let qtdClicks = 0;
const botao = document.getElementById('botao').addEventListener('click', alterarTexto);
const topo = document.getElementById('topo');
const conteudo = document.getElementById('conteudo');


function alterarTexto() {
    if (qtdClicks === 0) {        
            topo.innerHTML = 'POR QUE APRENDER E APLICAR';
            conteudo.innerHTML = '1 - Os padrões de projeto são soluções que já passaram pelo crivo do tempo, foram testadas ao longo dos anos, portanto entregam uma confiabilidade maior e evitam "reinventar a roda" a cada estrutura. <br><br>';
            qtdClicks++;
    } else if(qtdClicks === 1){
            conteudo.innerHTML = '1 - Os padrões de projeto são soluções que já passaram pelo crivo do tempo, foram testadas ao longo dos anos, portanto entregam uma confiabilidade maior e evitam "reinventar a roda" a cada estrutura. <br><br> 2 - A legibilidade do código é aprimorada e a comunicação entre os membros se torna mais eficaz, caso ambos conheçam os padrões que serão aplicados. <br><br>';
            qtdClicks++;
    } else if (qtdClicks === 2){
            conteudo.innerHTML = '1 - Os padrões de projeto são soluções que já passaram pelo crivo do tempo, foram testadas ao longo dos anos, portanto entregam uma confiabilidade maior e evitam "reinventar a roda" a cada estrutura. <br><br> 2 - A legibilidade do código é aprimorada e a comunicação entre os membros se torna mais eficaz, caso ambos conheçam os padrões que serão aplicados. <br><br> 3 - Os padrões não são soluções rígidas, podem ser adaptados para atender a necessidade do projeto, sendo úteis em situações especificas.';
            qtdClicks++;
    } else {
            window.location.href= 'tela-2.html';
    }
}