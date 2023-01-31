let btn = document.querySelector('#button');
console.log(btn);
let li_items = document.querySelectorAll('.frame-nav');
var nav = document.querySelector(".content-nav");
let name = document.querySelector(".name");
let change_image =  document.querySelector('.close-image');
let main_nav = document.querySelector('.navigator');

function display_menu() {
    let h2links_nav = document.querySelectorAll('.links-nav');
     if (nav.style.display === "flex") {
         nav.style.display = "none";
         name.style.display = 'block';
         change_image.src = 'images/menu.png';
     } else {
         nav.style.display = "flex";
         name.style.display = 'none';
         change_image.src = 'images/close-button.png';
     }
     nav.style.flexDirection = 'column';    
     nav.style.position = 'absolute';
     nav.style.top='48px';
     nav.style.width = '100vw';
     nav.style.height = "100%";
     nav.style.left = '0px';
     nav.style.margin = '0';
     nav.style.padding = '0';
     nav.style.background = "#3c3a39";
 }

function close() {
    
    let screen_size = screen.width;
    nav.style.display = "none";
    
    name.style.display = 'block';
    change_image.src = 'images/menu.png';
}


li_items.forEach((element) => element.addEventListener('click', close));
btn.addEventListener('click',display_menu);

