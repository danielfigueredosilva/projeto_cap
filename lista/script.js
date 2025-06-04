// Seleciona o corpo da tabela onde os usuários serão exibidos
var tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];

// Seleciona o botão "Excluir todos"
var botaoExcluirTodos = document.getElementById('excluirTodos');

// Busca os usuários salvos no localStorage (ou cria um array vazio se não houver)
var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Função para atualizar a tabela de usuários
function atualizarTabela() {
    tabela.innerHTML = ""; // Limpa a tabela antes de preencher novamente

    if (usuarios.length === 0) {
        var linha = tabela.insertRow(); // Cria uma nova linha na tabela
        var celula = linha.insertCell(); // Cria uma célula nessa linha
        celula.colSpan = 3; // Faz a célula ocupar as três colunas da tabela
        celula.textContent = 'Nenhum usuário cadastrado.'; // Mensagem de tabela vazia
        celula.style.textAlign = 'center'; // Centraliza o texto na célula
        botaoExcluirTodos.disabled = true; // Desabilita o botão "Excluir todos" se não houver usuários
    } else {
        usuarios.forEach(function(usuario) {
            var linha = tabela.insertRow(); // Cria uma nova linha para cada usuário
            var celulaNome = linha.insertCell(); // Célula para o nome
            var celulaEmail = linha.insertCell(); // Célula para o e-mail
            var celulaCep = linha.insertCell(); // Célula para o Cep
            var celulaAcoes = linha.insertCell(); // Célula para o botão de ação


            celulaNome.textContent = usuario.nome; // Preenche o nome do usuário
            celulaEmail.textContent = usuario.email; // Preenche o e-mail do usuário
            celulaCep.textContent = usuario.cep;  // Preenche o Cep do usuário

            var botao = document.createElement('button'); // Cria o botão de excluir
            botao.textContent = 'Excluir'; // Texto do botão
            botao.onclick = function() {
                excluirUsuario(usuario.email); // Chama a função para excluir o usuário específico
            };
            celulaAcoes.appendChild(botao); // Adiciona o botão na célula de ações
        });
        botaoExcluirTodos.disabled = false; // Habilita o botão "Excluir todos" se houver usuários
    }
}

// Função para excluir um usuário específico pelo e-mail
function excluirUsuario(email) {
    if (confirm('Deseja excluir este usuário?')) { // Confirmação do usuário
        usuarios = usuarios.filter(function(u) {
            return u.email !== email; // Mantém apenas os usuários com e-mails diferentes
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Atualiza o localStorage
        atualizarTabela(); // Atualiza a tabela na tela
    }
}

// Evento para excluir todos os usuários
botaoExcluirTodos.onclick = function() {
    if (usuarios.length === 0) return; // Se não houver usuários, não faz nada
    if (confirm('Tem certeza que deseja excluir todos os usuários?')) { // Confirmação do usuário
        usuarios = []; // Esvazia o array de usuários
        localStorage.removeItem('usuarios'); // Remove todos os usuários do localStorage
        atualizarTabela(); // Atualiza a tabela na tela
    }
};

// Inicializa a tabela ao carregar a página
atualizarTabela();

