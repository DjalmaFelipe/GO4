const loginButton = document.getElementById('login');

loginButton.addEventListener('click', login);

async function login(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", username)
        window.location.href="/menu/menu.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}