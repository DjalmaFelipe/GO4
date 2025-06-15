const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordReplay = document.getElementById('password-replay'); 

addEventListener('submit',adicionarUsuario);

function adicionarUsuario(event){
    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;
    const passwordReplayValue = passwordReplay.value;

    if (passwordReplayValue != passwordValue) {
      alert('senhas não coincidem');
      return
    }


    fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: usernameValue, password: passwordValue })
      })
      .then(response => {
        if (response.ok) {
          console.log("Usuário salvo com sucesso!");
          alert('usuario cadastrado');
          window.location.href="/index.html";
        } else {
          response.text().then(text => console.error("Erro:", text));
        }
      })
      .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao conectar com o backend.");
      });
}