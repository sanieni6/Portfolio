const emailInput = document.getElementById('user-email');
const buttonForm = document.getElementById('button-form');
function validateEmail() {
    const email = emailInput.value;
    if (email.toLowerCase() !== email) {
      // Mostrar un mensaje de error si el correo electrónico no está en minúsculas
      emailInput.setCustomValidity("El correo electrónico debe estar en minúsculas");
    } else {
      // Limpiar el mensaje de error si el correo electrónico es válido
      emailInput.setCustomValidity("");
    }
  }

//emailInput.addEventListener('input', validateEmail);
buttonForm.addEventListener('click', validateEmail);