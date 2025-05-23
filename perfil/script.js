const nomeInput = document.getElementById('nomeInput');
const emailInput = document.getElementById('emailInput');
const telefoneInput = document.getElementById('telefoneInput');
const dtNascInput = document.getElementById('dtNascInput');
const senhaInput = document.getElementById('senhaInput');

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
const usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (usuarioLogado) {
    nomeInput.value = usuarioLogado.nome;
    emailInput.value = usuarioLogado.email;
    telefoneInput.value = usuarioLogado.telefone;
    dtNascInput.value = usuarioLogado.datanascimento;
    senhaInput.value = usuarioLogado.senha;
} else {
    window.location.href = '../login/login';
}

function salvaDados() {
    let nome = nomeInput.value;
    let email = emailInput.value;
    let telefone = telefoneInput.value;
    let dtNasc = dtNascInput.value;
    let senha = senhaInput.value;

    
    const houveAlteracao = (
        nome !== usuarioLogado.nome ||
        email !== usuarioLogado.email ||
        telefone !== usuarioLogado.telefone ||
        dtNasc !== usuarioLogado.datanascimento ||
        senha !== usuarioLogado.senha
    );

    if (houveAlteracao) {
        console.log("oi");
        
        
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEditado));
    }
}