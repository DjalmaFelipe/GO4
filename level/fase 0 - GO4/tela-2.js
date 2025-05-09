document.addEventListener('DOMContentLoaded', () => {
    const legenda = document.querySelector('.legenda');
    let count = 0;
  
    legenda.addEventListener('animationiteration', () => {
      count++;
      console.log(`Repetição da animação: ${count}x`);
      if (count === 3) {
        window.location.href = "tela-3.html";
      }
    });
  });
  