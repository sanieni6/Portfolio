const emailInput = document.getElementById('user-email');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = '*Please, the email address must be in lowercase';
errorMessage.appendChild(message);