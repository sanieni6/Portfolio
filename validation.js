const emailInput = document.getElementById('user-email');
const buttonForm = document.getElementById('button-form');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = 'Format error';
errorMessage.appendChild(message);
// function validateEmail() {
document.getElementById('forma').addEventListener('submit', (event) => {
  const email = emailInput.value;
  if (email.toLowerCase() !== email) {
    // Mostrar un mensaje de error si el correo electrónico no está en minúsculas
    message.style.display = 'block';
    event.preventDefault();
    // emailInput.setCustomValidity("El correo electrónico debe estar en minúsculas");
  } else {
    // Limpiar el mensaje de error si el correo electrónico es válido
    // emailInput.setCustomValidity("");
    message.style.display = 'none';
  }
});

// emailInput.addEventListener('input', validateEmail);
// buttonForm.addEventListener('click', validateEmail(event));
// document.getElementById("form").addEventListener("submit", function(event) {