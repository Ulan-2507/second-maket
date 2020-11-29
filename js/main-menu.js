let mainMenulinks = document.querySelectorAll('.main-menu__link');
let langs = document.querySelectorAll('.lang__link');
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

activeToggle(mainMenulinks, 'selected');
activeToggle(langs, 'active-lang');
activeToggle(ServiceNavLinks, 'services-nav__link_active');


let btnsMenu = document.querySelectorAll('.btn-menu');
let mainMenuActive = document.querySelector('.main-menu');
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
            
            window.classList.toggle('hidden');
            window.classList.toggle('menu-open');
            if (window.classList.contains('menu-open')) {
                window.classList.remove('hidden');
            }
            

        }
    } 
}
function modalWindowToggle(btns, window) {
    for (let btn of btns) {
        btn.onclick = function() {
            mainMenuActive.classList.remove('menu-open');
            window.classList.toggle('modal-window-open');

            if (window.classList.contains('modal-window-open')) {
                
                if (window.classList.contains('feedback')) {
                    modalWindowCallback.classList.remove('modal-window-open');
                    window.classList.add('hidden');
                }
                else {
                    modalWindowFeedback.classList.remove('modal-window-open');
                    window.classList.add('hidden');
                }
            }
            window.classList.toggle('hidden');
            
        }
    } 
}

menuToggle(btnsMenu, mainMenuActive);
modalWindowToggle(btnsChant, modalWindowFeedback);
modalWindowToggle(btnsCall, modalWindowCallback);


let mainMenuSearch = document.querySelector('.main-menu__search');
let mainMenuForm = document.querySelector('.main-menu__form');
let btnSearch = document.querySelector('.btn-search');

btnSearch.onclick = function () {
    mainMenuSearch.classList.toggle('show-search-form');
    mainMenuForm.classList.toggle('visually-hidden');
    btnSearch.classList.toggle('btn-search-close');
}


