const formulario = document.getElementById('formulario');



formulario.onsubmit = function(evento){
    evento.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const existeSenha = usuarios.some(elemento => elemento.email === email);

    if(existe){
        location.href='../perfil/index.html'
    }
   
    console.log(existe)
}



