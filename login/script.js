const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem')

formulario.onsubmit = function(evento){
    evento.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioLogado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    

    if (usuarioLogado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        location.href='../perfil/index.html';
    }else{
        mensagem.textContent = 'E-mail ou senha incorreto';
        mensagem.style.color = 'red';
    }
   
    
}



