let links = document.querySelectorAll('.main-menu__link');

for (let link of links) {
    link.onclick = function () {
        for (let activeLink of links) {
            if (activeLink.classList.contains('active')) {
                activeLink.classList.remove('active');
            }
            link.classList.add('active');
        }
    }
}

let langs = document.querySelectorAll('.lang__link');


for (let lang of langs) {
    lang.onclick = function () {
        for (let activeLang of links) {
            if (activeLang.classList.contains('active__lang')) {
                activeLang.classList.remove('active__lang');
            }
            lang.classList.add('active__lang');
        }
    }
}

let btnsMenu = document.querySelectorAll('.btn-menu');
let mainMenuActive = document.querySelector('.main-menu');

for (let btnMenu of btnsMenu) {
    btnMenu.onclick = function() {
        mainMenuActive.classList.toggle('main-menu-open');
    }
}

let mainMenuSearch = document.querySelector('.main-menu__search');
let mainMenuForm = document.querySelector('.main-menu__form');
let btnSearch = document.querySelector('.btn-search');

btnSearch.onclick = function () {
    mainMenuSearch.classList.toggle('show-search-form');
    mainMenuForm.classList.toggle('visually-hidden');
    btnSearch.classList.toggle('btn-search-close');
}
