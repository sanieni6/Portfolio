const emailInput = document.getElementById('user-email');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = '*Please, the email address must be in lowercase';
errorMessage.appendChild(message);
const userName = document.getElementById('username');
const descriptionTextarea = document.getElementById('msg-input');
const validate = document.querySelectorAll('.input');

validate.forEach((element) => element.addEventListener('input', () => {
  localStorage.setItem(
    'formData',
    JSON.stringify({
      userName: userName.value,
      userEmail: emailInput.value,
      message: descriptionTextarea.value,

    }),
  );
}));
const fields = JSON.parse(localStorage.formData);
const renderInfo = () => {
  userName.value = fields.userName;
  emailInput.value = fields.userEmail;
  descriptionTextarea.value = fields.message;
};
window.onload = renderInfo;
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
