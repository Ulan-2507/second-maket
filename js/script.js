let mySwiper = undefined;
function initSwiper() {
    let screenWidth = innerWidth;
    if(screenWidth < 768 && mySwiper == undefined) {            
        mySwiper = new Swiper('.swiper-container', {            
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 1.3,
        });
    } else if (screenWidth >= 768 && mySwiper != undefined) {
        mySwiper.destroy(true, true);
        mySwiper = undefined;
        let swiperWrappers = document.querySelectorAll('.swiper-wrapper'); 
        let swiperSlides = document.querySelectorAll('.swiper-slide');
        for (let wrapper of swiperWrappers) {
            wrapper.removeAttr('style');
        }
        for (let slide of swiperSlides) {
            slide.removeAttr('style'); 
        }               
    }        
}

initSwiper();

window.addEventListener('resize', function(){
    initSwiper();        
});

let layerBlur = document.querySelector('.layer-blur');
let mainMenu = document.querySelector('.main-menu');
let mainMenulinks = mainMenu.querySelectorAll('.main-menu__link');
let langs = mainMenu.querySelectorAll('.lang__link');
let ServiceNavLinks = document.querySelectorAll('.services-nav__link');

function activeToggle(links, linkActive) {
    for (let link of links) {
        link.onclick = function () {
            for (let activeLink of links) {
                if (activeLink.classList.contains(linkActive)) {
                    activeLink.classList.remove(linkActive);
                }
                link.classList.add(linkActive);
            }
        }
    }
}

activeToggle(mainMenulinks, 'main-menu__nav-link_active');
activeToggle(langs, 'lang__link_active');
activeToggle(ServiceNavLinks, 'services__nav-link_active');

let btnsMenu = document.querySelectorAll('.btn-menu');
let btnsChant = document.querySelectorAll('.btn-chat');
let btnsCall = document.querySelectorAll('.btn-call');
let modalWindows = document.querySelectorAll('.modal-window');
let modalWindowFeedback = document.querySelector('.feedback');
let modalWindowCallback = document.querySelector('.callback');

function menuToggle(btns, window) {
    for (let btn of btns) {
        btn.onclick = function() {
            for (let modalWindow of modalWindows) {
                modalWindow.classList.remove('modal-window-open');
            }
            
            window.classList.toggle('visibility-hidden');
            window.classList.toggle('menu-open');
            if (window.classList.contains('menu-open')) {
                window.classList.remove('visibility-hidden');
            }
            layerBlur.classList.toggle('layer-blur_active');

        }
    } 
}
function modalWindowToggle(btns, window) {
    for (let btn of btns) {
        btn.onclick = function() {
            mainMenu.classList.remove('menu-open');
            window.classList.toggle('modal-window-open');

            if (window.classList.contains('modal-window-open')) {
                
                if (window.classList.contains('feedback')) {
                    modalWindowCallback.classList.remove('modal-window-open');
                    window.classList.add('visibility-hidden');
                }
                else {
                    modalWindowFeedback.classList.remove('modal-window-open');
                    window.classList.add('visibility-hidden');
                }
            }
            window.classList.toggle('visibility-hidden');
            layerBlur.classList.toggle('layer-blur_active');
            
        }
    } 
}
menuToggle(btnsMenu, mainMenu);
modalWindowToggle(btnsChant, modalWindowFeedback);
modalWindowToggle(btnsCall, modalWindowCallback);

let mainMenuSearch = mainMenu.querySelector('.main-menu__search');
let mainMenuForm = mainMenu.querySelector('.main-menu__form');
let btnSearch = mainMenu.querySelector('.btn-search');

btnSearch.onclick = function () {
    mainMenuSearch.classList.toggle('show-search-form');
    mainMenuForm.classList.toggle('visually-hidden');
    btnSearch.classList.toggle('btn-close');
}


layerBlur.addEventListener('click', function () {
    mainMenu.classList.remove('menu-open');
    mainMenu.classList.add('visibility-hidden');
    modalWindowCallback.classList.remove('modal-window-open');
    modalWindowCallback.classList.add('visibility-hidden');
    modalWindowFeedback.classList.remove('modal-window-open');
    modalWindowFeedback.classList.add('visibility-hidden');
    layerBlur.classList.toggle('layer-blur_active');
});