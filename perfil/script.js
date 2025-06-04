//Pega os dados o forms e associa a uma constante
const nomeInput = document.getElementById('nomeInput');
const emailInput = document.getElementById('emailSpan');
const telefoneInput = document.getElementById('telefoneInput');
const dtNascInput = document.getElementById('dtNascInput');
const senhaInput = document.getElementById('senhaInput');
const mensagem = document.getElementById('mensagem');
const formulario = document.getElementById('formulario');
const cepInput = document.getElementById('cepInput');
const cidadeInput = document.getElementById('cidadeInput');
const logradouroInput = document.getElementById('logradouroInput');
const UFInput = document.getElementById('UFInput');

//Pega os arrays no localStorage 
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

//Atribui o email do usuario logado no id do span
emailInput.textContent = usuarioLogado.email;
cepInput.onchange = function (evento) {
 
  let cepValor = document.getElementById("cepInput").value;

//   if(cepValor.length < 8) {
//     console.log(cepValor)
//         document.getElementById("logradouro").value = "";
//         document.getElementById("UF").value = "";
//         document.getElementById("Cidade").value =  "" ;
//   }
  if (cepValor.length == 8) {
    fetch(`https://cep.awesomeapi.com.br/json/${cepValor}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("logradouroInput").value = data.address || "";
        document.getElementById("UFInput").value = data.state || "";
        document.getElementById("cidadeInput").value = data.city || "";
      })
      .catch((error) => console.log(error));
  }
};

//Se a condição for true atribue os dados do usuario logado no value do input e mostra na tela de perfil
if (usuarioLogado) {
    nomeInput.value = usuarioLogado.nome;
    emailInput.value = usuarioLogado.email;
    telefoneInput.value = usuarioLogado.telefone;
    dtNascInput.value = usuarioLogado.datanascimento;
    senhaInput.value = usuarioLogado.senha;
    cepInput.value = usuarioLogado.cep;
    cidadeInput.value = usuarioLogado.Cidade;
    logradouroInput.value = usuarioLogado.Logradouro;
    UFInput.value = usuarioLogado.uf;
} else {
    window.location.href = '../login/login';
}

//Edita dados do perfil do usuario logado
formulario.onsubmit = function (evento) {
    evento.preventDefault();
    //Pega o value do forms
    let nome = nomeInput.value;
    let email = emailInput.value
    let telefone = telefoneInput.value;
    let dtNasc = dtNascInput.value;
    let senha = senhaInput.value;
    let cep = cepInput.value;

    //Testa condição boleana, true ou false 
    const houveAlteracao = (
        nome !== usuarioLogado.nome ||
        telefone !== usuarioLogado.telefone ||
        dtNasc !== usuarioLogado.datanascimento ||
        senha !== usuarioLogado.senha ||
        cep !== usuarioLogado.cep
    );

    if (!nome || !telefone || !dtNasc || !senha || !cep) {
    mensagem.style.display = 'block';
    mensagem.textContent = 'Preencha todos os campos.';
    mensagem.style.color = 'red';
    return;
    }

    //Se for true  
    if (houveAlteracao) {
        console.log("oi");
        //Faz a busca no array pelo registro de email e atribue o indece do objeto a variavel 
        let index = usuarios.findIndex(usuario => usuario.email === email);

        //Se o indice for -1, o indice não foi encotrado, caso contrario, 
        //pega o indice do array usuarios atribuido a variavel, acessa o elemento do objeto que recebe o input modificado 
        if ( index !== -1 ) {
            usuarios[index].nome = nome;
            usuarioLogado.nome = nome;

            usuarios[index].telefone = telefone;
            usuarioLogado.telefone = telefone;

            usuarios[index].datanascimento = dtNasc;
            usuarioLogado.datanascimento = dtNasc;

            usuarios[index].senha = senha;
            usuarioLogado.senha = senha;

            usuarios[index].cep = cep;
            usuarioLogado.cep = cep;
        }
        
        //Envia para o localStorage os dados editados, para os dois arrays do localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        
        //Se a menssagen de erro ja apareceu na tela, ela é ocultada
        mensagem.style.display = 'none';
        mensagem.style.display = 'block';
        mensagem.textContent = 'Dados atualizados com sucesso!';
        mensagem.style.color = 'green';


    }else{
        //Se o usuario salvar sem alterar os dados mostra messagem de erro
        mensagem.style.display = 'block';
        //Estilização da mensagem de erro
        mensagem.textContent = ('Nenhum dado modificado!');
        mensagem.style.color = 'red';
        
    }
}