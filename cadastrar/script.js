
    const formulario = document.getElementById('formulario');
    const mensagem = document.getElementById('mensagem');

    
    formulario.onsubmit = function(evento) {
      evento.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const datanascimento = document.getElementById('datanascimento').value;
      const telefone = document.getElementById('telefone').value;
      

      

      if (nome === '') {
        mensagem.textContent = 'Nome Precisa ser Preenchido.';
        mensagem.className = 'mensagem';
        return;
      }
      if (telefone === '') {
        mensagem.textContent = 'Telefone Precisa ser Preenchido.';
        mensagem.className = 'mensagem';
        return;
      }
      if (email === '') {
        mensagem.textContent = 'Email Precisa ser Preenchido.';
        mensagem.className = 'mensagem';
        return;
      }
      if (senha === '') {
        mensagem.textContent = 'Senha Precisa ser Preenchido.';
        mensagem.className = 'mensagem';
        return;
      }
      if (datanascimento === '') {
        mensagem.textContent = 'Data de Nascimento Precisa ser Preenchido.';
        mensagem.className = 'mensagem';
        return;
      }
      

      
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      const existe = usuarios.some(usuario => usuario.email === email);
      if (existe) {
        mensagem.textContent = 'Esse e-mail já está cadastrado.';
        
        return;
      }

      usuarios.push({ nome: nome, email: email, senha: senha , datanascimento: datanascimento, telefone: telefone });

      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      mensagem.textContent = 'Cadastro realizado com sucesso!';
      mensagem.className = 'mensagem sucesso';

      setTimeout(() => {
            window.location.href = '../login/';
        },2000);   
      
    };
