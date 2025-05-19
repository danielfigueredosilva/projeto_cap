
    const formulario = document.getElementById('formulario');
    const mensagem = document.getElementById('mensagem');

    
    formulario.onsubmit = function(evento) {
      evento.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      if (nome === '' || email === '' || senha === '') {
        mensagem.textContent = 'Preencha todos os campos.';
        mensagem.className = 'mensagem';
        return;
      }

      
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      const existe = usuarios.some(usuario => usuario.email === email);
      if (existe) {
        mensagem.textContent = 'Esse e-mail já está cadastrado.';
        
        return;
      }

      usuarios.push({ nome: nome, email: email, senha: senha });

      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      mensagem.textContent = 'Cadastro realizado com sucesso!';
      mensagem.className = 'mensagem sucesso';

      // Limpa os campos
      formulario.reset();
    };