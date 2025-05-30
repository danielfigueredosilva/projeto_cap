// Obtém a referência ao formulário pelo ID 'formulario'
const formulario = document.getElementById('formulario');

// Obtém a referência ao elemento onde será exibida a mensagem de erro ou sucesso
const mensagem = document.getElementById('mensagem');

// Define a função que será executada quando o formulário for enviado
formulario.onsubmit = function(evento){
    // Previne o envio padrão do formulário (que recarregaria a página)
    evento.preventDefault();

    // Obtém os valores digitados nos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Tenta recuperar a lista de usuários armazenada no localStorage (ou um array vazio se não existir)
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procura um usuário na lista que tenha o mesmo email e senha informados
    const usuarioLogado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    
    // Se encontrou um usuário com email e senha corretos
    if (usuarioLogado) {
        // Armazena o usuário logado no localStorage para uso posterior (ex: em outras páginas)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        // Redireciona o usuário para a página de perfil
        location.href = '../perfil/index.html';
    } else {
        // Se não encontrou, exibe uma mensagem de erro
        mensagem.textContent = 'E-mail ou senha incorreto';
        mensagem.style.color = 'red';
    }
}
