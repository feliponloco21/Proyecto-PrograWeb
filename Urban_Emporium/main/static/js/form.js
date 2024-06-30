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

function validacionReg() {
    var VarNom = false;
    var VarCor = false;
    var VarUs = false;
    var VarCon = false;
    var VarConCon = false;
    var nombre = document.getElementById("nombre").value;
    var usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmar_contrasena = document.getElementById("confirmar_contrasena").value;

    if (nombre === "") {
      document.getElementById("mensaje1").textContent = "Debe ingresar un nombre ";
    } else if (nombre.length < 3 || nombre.length > 20) {
      document.getElementById("mensaje1").textContent = "El nombre debe tener entre 3 y 20 caracteres";
    } else {
      VarNom = true;
      document.getElementById("mensaje1").textContent = "";
    }

    // Validación de correo electrónico con expresión regular
    if (correo === "") {
      document.getElementById("mensaje2").textContent = "Debe ingresar un correo ";
    } else if (!correo.includes('@')) {
      document.getElementById("mensaje2").textContent = "El correo electrónico debe contener '@'";
    } else if (!/@[^\s@]+$/.test(correo)) {
      document.getElementById("mensaje2").textContent = "Después del '@' debe haber al menos un caracter";
    } else if (!correo.includes('.')) {
      document.getElementById("mensaje2").textContent = "El correo electrónico debe contener '.' después del '@'";
    }
     else if (!/\.[^\s@]+$/.test(correo)) {
        document.getElementById("mensaje2").textContent = "Después del último punto debe haber al menos un caracter";
    }
    else {
      VarCor = true;
      document.getElementById("mensaje2").textContent = "";
    }
  
    if (usuario === "") {
      document.getElementById("mensaje3").textContent = "Debe ingresar un nombre de usuario ";
    } else if (usuario.length < 3 || usuario.length > 14) {
      document.getElementById("mensaje3").textContent = "El usuario debe tener entre 3 y 14 caracteres";
    } else {
      VarUs = true;
      document.getElementById("mensaje3").textContent = "";
    }
    
if (contrasena === "") {
      document.getElementById("mensaje4").textContent = "Debe ingresar una contraseña ";
} else if (contrasena.length < 8 || contrasena.length > 16) {
      document.getElementById("mensaje4").textContent = "La contraseña debe tener entre 8 y 16 caracteres";
} else {
      VarCon = true;
      document.getElementById("mensaje4").textContent = "";
  
}
  
if (confirmar_contrasena !== contrasena) {
      document.getElementById("mensaje5").textContent = "Las contraseñas deben ser iguales ";
    } else {
      VarConCon = true;
      document.getElementById("mensaje5").textContent = "";
    }
  
if (VarNom && VarCor && VarUs && VarCon && VarConCon) {
      // Redirigir a la pagina de login 
      window.location.href = "../Login_85/Estructura_LN_85.html";
    }
}