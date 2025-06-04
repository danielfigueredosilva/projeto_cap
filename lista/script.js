
var tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];

var botaoExcluirTodos = document.getElementById('excluirTodos');

var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || [];


function atualizarTabela() {
    tabela.innerHTML = ""; 

    if (usuarios.length === 0) {
        var linha = tabela.insertRow(); 
        var celula = linha.insertCell();
        celula.colSpan = 4; 
        celula.textContent = 'Nenhum usuário cadastrado.'; 

        botaoExcluirTodos.disabled = true; 
    } else {
        usuarios.forEach(function(usuario) {
            var linha = tabela.insertRow(); 
            var celulaNome = linha.insertCell(); 
            var celulaEmail = linha.insertCell(); 
            var celulaCep = linha.insertCell(); 
            var celulaExcluir = linha.insertCell(); 


            celulaNome.textContent = usuario.nome; 
            celulaEmail.textContent = usuario.email; 
            celulaCep.textContent = usuario.cep; 

            var botao = document.createElement('button');
            botao.textContent = 'Excluir';
            botao.onclick = function() {
                excluirUsuario(usuario.email); // Chama a função para excluir o usuário específico
            };
            celulaExcluir.appendChild(botao); 
        });
        botaoExcluirTodos.disabled = false;
    }
}

function excluirUsuario(email) {
    if (confirm("Deseja excluir este usuário?")) {
    
    usuarios = usuarios.filter(function (usuario) {
    return usuario.email !== email;
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Atualiza localStorage

    if (usuarioLogado.email === email) {
        localStorage.removeItem("usuarioLogado");

        alert("Usuário excluido...perfil atual não existe mais");
        window.location.href = '../login/index.html';
    }

    atualizarTabela();
    }
}

botaoExcluirTodos.onclick = function() {
    if (usuarios.length === 0) return; // Se não tiver usuários, não faz nada
    if (confirm('Tem certeza que deseja excluir todos os usuários?')) { 
        usuarios = [];
        
        localStorage.removeItem('usuarios'); 
        localStorage.removeItem("usuarioLogado"); 
        atualizarTabela();
    }
};

// Inicializa a tabela ao carregar a página
atualizarTabela();

