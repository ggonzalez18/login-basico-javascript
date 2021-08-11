let cargar = () => {
    let form = document.getElementById('formulario');
    form.addEventListener("submit", login);
}

let login = (event) => {
    event.preventDefault();
    var email = document.querySelector('.email');
    var password = document.querySelector('.password');
    let errorMenssage = '';
    var message = '';
    let parrafoError = document.querySelector('.error');
    let parrafoResultado = document.querySelector('.resultado');

    if (email.value == '' || password.value == '') {
        errorMenssage = '*Campos incompletos'
        parrafoError.style.color = 'red';
        parrafoError.style.fontSize = '18px'
        parrafoError.innerHTML = errorMenssage;
        parrafoResultado.innerHTML = '';
    } else {
        message = `Bienvenido ${email.value} ya estas logueado`;
        alert(message);
        parrafoResultado.style.color = 'green';
        parrafoResultado.style.fontSize = '18px'
        parrafoResultado.innerHTML = message;
        parrafoError.innerHTML = '';
    }
};