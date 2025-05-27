const nomeInput = document.getElementById('nomeInput');
const emailInput = document.getElementById('emailSpan');
const telefoneInput = document.getElementById('telefoneInput');
const dtNascInput = document.getElementById('dtNascInput');
const senhaInput = document.getElementById('senhaInput');
const mensagem = document.getElementById('mensagem');

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

emailInput.textContent = usuarioLogado.email;

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
    let email = emailInput.value
    let telefone = telefoneInput.value;
    let dtNasc = dtNascInput.value;
    let senha = senhaInput.value;

    
    const houveAlteracao = (
        nome !== usuarioLogado.nome ||
        telefone !== usuarioLogado.telefone ||
        dtNasc !== usuarioLogado.datanascimento ||
        senha !== usuarioLogado.senha
    );

    if (houveAlteracao) {
        console.log("oi");
    
        let index = usuarios.findIndex(usuario => usuario.email === email);
        if ( index !== -1 ) {
            usuarios[index].nome = nome;
            usuarioLogado.nome = nome;
        }
        
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        mensagem.style.display = 'none';

    }else{
        mensagem.style.display = 'block'
        mensagem.textContent = ('Nenhum dado modificado!');
        mensagem.style.color = 'red';
    }
}