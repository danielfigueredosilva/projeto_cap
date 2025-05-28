const formulario = document.getElementById("formulario");
const cep = document.getElementById("cep");
const mensagem = document.getElementById("mensagem");

cep.onchange = function (evento) {
 
  let cepValor = document.getElementById("cep").value;

  if(cepValor.length < 8) {
    console.log(cepValor)
        document.getElementById("Logradouro").value = "";
        document.getElementById("UF").value = "";
        document.getElementById("Cidade").value =  "" ;
  }
  if (cepValor.length == 8) {
    fetch(`https://cep.awesomeapi.com.br/json/${cepValor}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("Logradouro").value = data.address || "";
        document.getElementById("UF").value = data.state || "";
        document.getElementById("Cidade").value = data.city || "" ;
      })
      .catch((error) => console.log(error));
  }
};

formulario.onsubmit = function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const datanascimento = document.getElementById("datanascimento").value;
  const telefone = document.getElementById("telefone").value;
  const cep = document.getElementById("cep").value;
  const Logradouro = document.getElementById("Logradouro").value;
  const uf = document.getElementById("UF").value;
  const Cidade = document.getElementById("Cidade").value;

  if (nome === "") {
    mensagem.textContent = "Nome Precisa ser Preenchido.";
    mensagem.className = "mensagem";
    return;
  }
  if (telefone === "") {
    mensagem.textContent = "Telefone Precisa ser Preenchido.";
    mensagem.className = "mensagem";
    return;
  }
  if (telefone.length != 11) {
    mensagem.textContent = "Telefone precisa ter 11 digitos";
    mensagem.className = "mensagem";
    return;
  }
  if (cep.length != 8) {
    mensagem.textContent = "Cep precisa ter 8 digitos";
    mensagem.className = "mensagem";
    return;
  }
  if (email === "") {
    mensagem.textContent = "Email Precisa ser Preenchido.";
    mensagem.className = "mensagem";
    return;
  }
  if (senha === "") {
    mensagem.textContent = "Senha Precisa ser Preenchido.";
    mensagem.className = "mensagem";
    return;
  }
  if (datanascimento === "") {
    mensagem.textContent = "Data de Nascimento Precisa ser Preenchido.";
    mensagem.className = "mensagem";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.some((usuario) => usuario.email === email);
  if (existe) {
    mensagem.textContent = "Esse e-mail já está cadastrado.";

    return;
  }

  usuarios.push({
    nome: nome,
    email: email,
    senha: senha,
    datanascimento: datanascimento,
    telefone: telefone,
    cep: cep,
    uf: uf,
    Logradouro: Logradouro,
    Cidade:Cidade,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.className = "mensagem sucesso";

  setTimeout(() => {
    window.location.href = "../login/";
  }, 2000);
};
