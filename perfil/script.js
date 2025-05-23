const nomeSpan = document.getElementById('nomeUsuario');
const emailSpan = document.getElementById('emailUsuario');
const foneSpan = document.getElementById('foneUsuario')
const dtNascSpan = document.getElementById('dtNascUsuario')

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (usuarioLogado) {
    nomeSpan.textContent = usuarioLogado.nome
}else {
      location.href = '../login/index.html';
}

emailSpan.textContent = usuarioLogado.email
foneSpan.textContent = usuarioLogado.telefone
dtNascSpan.textContent = usuarioLogado.datanascimento
