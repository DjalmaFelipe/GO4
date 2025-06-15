const usuarioLogado = document.getElementById('usuario-logado');
usuarioLogado.innerHTML = localStorage.getItem("logado");

setTimeout(() => {
    window.location.href = "tela-4.html"
}, 15000)