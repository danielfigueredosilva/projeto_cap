// Seleciona o corpo da tabela onde os usuários serão exibidos
var tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];

// Busca os usuários salvos no localStorage (ou cria um array vazio se não houver)
var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Se não houver usuários, mostra uma mensagem
if (usuarios.length === 0) {
    var linha = tabela.insertRow(); // Cria uma nova linha
    var celula = linha.insertCell(); // Cria uma célula
    celula.colSpan = 2; // Faz a célula ocupar as duas colunas
    celula.textContent = 'Nenhum usuário cadastrado.'; // Mensagem
} else {
    // Para cada usuário, cria uma linha na tabela
    usuarios.forEach(function(usuario) {
        var linha = tabela.insertRow();
        var celulaNome = linha.insertCell(); 
        var celulaEmail = linha.insertCell(); 
        celulaNome.textContent = usuario.nome; // Preenche o nome
        celulaEmail.textContent = usuario.email; // Preenche o e-mail
    });
}