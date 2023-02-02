const btn = document.querySelector('#button');
const liItems = document.querySelectorAll('.frame-nav');
const nav = document.querySelector('.content-nav');
const name = document.querySelector('.name');
const closeBtn = document.querySelector('#close-button');
function displayMenu() {
  closeBtn.style.display = 'block';
  btn.style.display = 'none';
  nav.classList.add('display-nav');
  nav.classList.remove('no-nav');
  name.style.display = 'none';
  nav.classList.add('nav-styles');
}
function close() {
  nav.classList.remove('display-nav');
  nav.classList.add('no-nav');
  name.style.display = 'block';
  closeBtn.style.display = 'none';
  btn.style.display = 'block';
}

liItems.forEach((element) => element.addEventListener('click', close));
btn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', close);
