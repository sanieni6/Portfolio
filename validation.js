const emailInput = document.getElementById('user-email');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = '*Please, the email address must be in lowercase';
errorMessage.appendChild(message);
document.getElementById('forma').addEventListener('submit', (event) => {
  const email = emailInput.value;
  if (email.toLowerCase() !== email) {
    emailInput.style.border = '3px solid red';
    message.style.display = 'block';
    event.preventDefault();
  } else {
    message.style.display = 'none';
  }
});