function validarFormulario() {
    var email = document.getElementById('InputEmail1').value;
    var password = document.getElementById('InputPassword1').value;
    var emailMessage = document.getElementById('mensajecorreo');
    var passwordMessage = document.getElementById('mensajecontra');
    var isValid = true;

    emailMessage.textContent = '';
    passwordMessage.textContent = '';

    if (!email) {
        emailMessage.textContent = 'Por favor ingrese su correo electrónico.';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailMessage.textContent = 'Por favor ingrese un correo electrónico válido.';
        isValid = false;
    }

    if (!password) {
        passwordMessage.textContent = 'Por favor ingrese su contraseña.';
        isValid = false;
    } else if (password.length < 6) {
        passwordMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}