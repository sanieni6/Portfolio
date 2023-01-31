const btn = document.querySelector('#button');
const liItems = document.querySelectorAll('.frame-nav');
const nav = document.querySelector('.content-nav');
const name = document.querySelector('.name');
const changeImage = document.querySelector('.close-image');
function displayMenu() {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    name.style.display = 'block';
    changeImage.src = 'images/menu.png';
  } else {
    nav.style.display = 'flex';
    name.style.display = 'none';
    changeImage.src = 'images/close-button.png';
  }
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '48px';
  nav.style.width = '100vw';
  nav.style.height = '100%';
  nav.style.left = '0px';
  nav.style.margin = '0';
  nav.style.padding = '0';
  nav.style.background = '#3c3a39';
}

function close() {
  nav.style.display = 'none';
  name.style.display = 'block';
  changeImage.src = 'images/menu.png';
}
liItems.forEach((element) => element.addEventListener('click', close));
btn.addEventListener('click', displayMenu);
