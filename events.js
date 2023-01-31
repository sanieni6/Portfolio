let btn = document.querySelector('#button');
console.log(btn);
let li_items = document.querySelectorAll('.frame-nav');
var nav = document.querySelector(".content-nav");
let name = document.querySelector(".name");
let change_image =  document.querySelector('.close-image');
let main_nav = document.querySelector('.navigator');function close() {
    
    let screen_size = screen.width;
    nav.style.display = "none";
    
    name.style.display = 'block';
    change_image.src = 'images/menu.png';
}

