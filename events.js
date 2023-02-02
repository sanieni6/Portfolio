const btn = document.querySelector('#button');
const liItems = document.querySelectorAll('.frame-nav');
const nav = document.querySelector('.content-nav');
const name = document.querySelector('.name');
const changeImage = document.querySelector('.close-image');
const closeBtn = document.querySelector('#close-button');
//nav.classList.add('no-nav');
function displayMenu() {
  let aux = 0;
  // for (let cssClass of nav.classList) {
  //   if(cssClass === "display-nav"){
  //     //nav.classList.remove('display-nav');
  //     aux = 1;
  //   }
  //   else if(cssClass === "no-nav"){
  //     aux = 2;
  //   }
  // }
  if (nav.style.display === 'flex') {
    //nav.style.display = 'none';
    nav.classList.add('no-nav');
    for (let cssClass of nav.classList) {
      if(cssClass === "display-nav"){
           nav.classList.remove('display-nav');
     
      }
    }
    name.style.display = 'block';
    //changeImage.src = 'images/menu.png';
  } else {
    //nav.style.display = 'flex';
    for (let cssClass of nav.classList) {
      if(cssClass === "no-nav"){
           nav.classList.remove('no-nav');
     
      }
    }
    nav.classList.add('display-nav');
    name.style.display = 'none';
    //changeImage.src = 'images/close-button.png';
    closeBtn.style.display = 'block';
  }
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '48px';
  nav.style.width = '87.3vw';
  nav.style.height = '100%';
  nav.style.left = '0px';
  nav.style.margin = '0';
  nav.style.padding = '0 24px';
  nav.style.background = '#3c3a39';
}
//nav.style.display = window.innerWidth < 768 ? 'none' : 'flex';
function close() {
  nav.style.display = window.innerWidth < 768 ? 'none' : 'flex';
  //nav.style.display = 'none';
  name.style.display = 'block';
  //changeImage.src = 'images/menu.png';
  closeBtn.style.display = 'none';
}
liItems.forEach((element) => element.addEventListener('click', close));
btn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', close);
