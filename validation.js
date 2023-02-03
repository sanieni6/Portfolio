const emailInput = document.getElementById('user-email');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = '*Please, the email address must be in lowercase';
errorMessage.appendChild(message);
const userName = document.getElementById('username');
const descriptionTextarea = document.getElementById('msg-input');
const validate = document.querySelectorAll('.input');
const formData = {
  userName: JSON.parse(localStorage.getItem('formData')).userName,
  userEmail: JSON.parse(localStorage.getItem('formData')).userEmail,
  message: JSON.parse(localStorage.getItem('formData')).message,
};

const renderInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem('formData'));
  userName.value = storedUserData.userName;
  emailInput.value = storedUserData.userEmail;
  descriptionTextarea.value = storedUserData.message;
};
const local = (event, value) => {
  formData[value] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
};
window.onload = renderInfo;
validate.forEach((element) => element.addEventListener('keyup', (e) => {
  local(e, element.name);
}));

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

