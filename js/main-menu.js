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
let modalFeedbackActive = document.querySelector('.modal-window');

function menuToggle(btns, window) {
    for (let btn of btns) {
        btn.onclick = function() {
            modalFeedbackActive.classList.remove('modal-window-open');
            window.classList.toggle('menu-open');
            document.querySelectorAll('.modal-window__input').setAttribute('autofocus', 'autofocus');
        }
    } 
}
function modalWindowToggle(btns, window) {
    for (let btn of btns) {
        btn.onclick = function() {
            mainMenuActive.classList.remove('menu-open');
            window.classList.toggle('modal-window-open');
        }
    } 
}

menuToggle(btnsMenu, mainMenuActive);
modalWindowToggle(btnsChant, modalFeedbackActive);


let mainMenuSearch = document.querySelector('.main-menu__search');
let mainMenuForm = document.querySelector('.main-menu__form');
let btnSearch = document.querySelector('.btn-search');

btnSearch.onclick = function () {
    mainMenuSearch.classList.toggle('show-search-form');
    mainMenuForm.classList.toggle('visually-hidden');
    btnSearch.classList.toggle('btn-search-close');
}


