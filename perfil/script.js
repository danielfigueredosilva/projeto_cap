const nomeSpan = document.getElementById('nomeUsuario');
const emailSpan = document.getElementById('emailUsuario');

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (usuarioLogado) {
    nomeSpan.textContent = usuarioLogado.nome
}else {
      location.href = '../login/index.html';
}

emailSpan.textContent = usuarioLogado.email