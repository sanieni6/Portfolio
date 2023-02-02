const btnPopup = document.querySelectorAll('.btnpop');
const closeBtn = document.createElement('button');
const windowShadow = document.createElement('div');
windowShadow.className = 'window';
const popUp = document.createElement('div');
const title = document.createElement('h2');
const divHead = document.createElement('div');
const divTitle = document.createElement('div');
const divMiddle = document.createElement('div');
const divFooter = document.createElement('div');
const imagePortrait = document.createElement('img');
const pLoret = document.createElement('p');
const buttonContainer = document.createElement('div');
const btnLive = document.createElement('a');
const btnSee = document.createElement('a');
const body = document.querySelector('body');
//works
const works = [

    {
        item: 0,
        title:'Multi Post Stories',
        apps: ['html1', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/Snapshoot Portfolio.png',
        desktopImage: '/images/first-place.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',

    },

    {
        item: 1,
        title:'Profesional Art Printing Data',
        apps:['html2', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/Img Placeholder.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },

    {
        item: 2,
        title:'Profesional Art Printing Data',
        apps:['html3', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/placeholder1.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },

    {
        item: 3,
        title:'Profesional Art Printing Data',
        apps:['html4', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/placeholder2.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },

    {
        item: 4,
        title:'Profesional Art Printing Data',
        apps:['html5', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/Img Placeholder.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },

    {
        item: 5,
        title:'Profesional Art Printing Data',
        apps:['html6', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/placeholder1.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },

    {
        item: 6,
        title:'Profesional Art Printing Data',
        apps:['html7', 'Bootstrap', 'Ruby on Rails'],
        image: '/images/second-place.png',
        desktopImage: '/images/placeholder2.png',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        btnText: '#',
        btnText1: '#',
    },
]
divHead.appendChild(divTitle);
let i = 0;
works.forEach((element)=> {
    i++;
    const ulElement = document.createElement('ul');
    let nombre = 'ul-list'+ String(i);
    ulElement.id = 'ul-list';
    ulElement.className = nombre ;
    ulElement.className = 'ul-list';
    element.apps.forEach((app,iddex) => {
        const liElement = document.createElement('li');
        liElement.classList.add('tags-popup');
        liElement.textContent = element.apps[iddex];
        ulElement.appendChild(liElement);
    })
    divHead.appendChild(ulElement);
})
let posicionActualDelDesplazamiento;
btnPopup.forEach((button, id) => {
    button.addEventListener("click", () => {
    const nId = works.findIndex((work) => work.item === id);
    body.appendChild(windowShadow);
    windowShadow.appendChild(popUp);
    popUp.appendChild(divHead);
    const numList = document.querySelectorAll('.ul-list');
    numList.forEach((list, idd) => {
        if(idd === id){
            list.style.display = 'flex';
            list.classList.add('apps-popup');
        }else{
            list.style.display = 'none';
        }

    })
    posicionActualDelDesplazamiento = window.scrollY;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
    divTitle.appendChild(title);
    divTitle.appendChild(closeBtn);
    popUp.appendChild(divMiddle);
    divMiddle.appendChild(imagePortrait);
    divMiddle.appendChild(divFooter);
    divFooter.appendChild(pLoret);
    divFooter.appendChild(buttonContainer);
    buttonContainer.appendChild(btnLive);
    buttonContainer.appendChild(btnSee);
    const windowScreen = document.querySelector('.window');
    windowScreen.style.display = 'flex';
    windowShadow.classList.add('window');
    popUp.classList.add('pop-up');
    divHead.classList.add('div-head');
    //content
    title.textContent = works[nId].title;
    imagePortrait.src = window.innerWidth < 768 ? works[nId].image : works[nId].desktopImage;
    imagePortrait.classList.add('image-portrait');
    closeBtn.style.backgroundImage = 'url(/images/close-popup.png)';
    divFooter.classList.add('footer-container');
    pLoret.textContent= works[nId].p;
    divTitle.classList.add('div-title');
    title.classList.add('title-popup');
    closeBtn.classList.add('close-button');
    divMiddle.classList.add('middle');
    pLoret.classList.add('ploret');
    buttonContainer.classList.add('buttons-container');
    btnLive.classList.add('button1');
    btnSee.classList.add('button2');
    btnLive.href= works[nId].btnText;
    btnSee.href = works[nId].btnText1;



    
});
});
    


function closePopup() {
    const windowScreen = document.querySelector('.window');
    windowScreen.style.display = 'none';
    document.body.style.overflow = "auto";

  // regresa a la posición anterior del desplazamiento
  window.scrollTo(0, posicionActualDelDesplazamiento);

}
closeBtn.addEventListener('click',closePopup);

