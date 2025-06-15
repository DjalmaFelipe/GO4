const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

const usuarioLogado = document.getElementById('usuario-logado');

const musica = document.getElementById('musica');
const trilha = document.getElementById('trilha');

usuarioLogado.innerHTML = localStorage.getItem("logado");

musica.addEventListener('click', tocar);

function tocar() {
  if(trilha.paused){
    trilha.play()
  } else {
    trilha.pause()
  }
}


let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if (currentSlide === slider.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if (currentSlide === 0) {
    currentSlide = slider.length - 1
  } else {
    currentSlide--
  }
  showSlider()
}

function acessarFase() {
  switch (currentSlide) {
    case 0:
      window.location.href = '../level/fase0-GO4/tela-1.html';
      break;
    case 1:
      window.location.href = '../level/fase1-Design-Patterns/tela-1.html';
      break;
    case 2:
      window.location.href = '../level/fase2-Strategy/tela-1.html';
      break;
    case 3:
      window.location.href = '../level/fase3-Singleton/tela-1.html';
      break;
  }
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
slider.forEach(img => img.addEventListener('click', acessarFase))