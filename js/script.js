
let mainDoc = document.querySelector('.wrapper');
let blur = document.querySelector('.layer-blur');
let menu = document.querySelector('.main-menu');
let btnMenu = mainDoc.querySelector('.btn-menu');
let btnsClose = mainDoc.querySelectorAll('.btn-close');
let btnsCall = mainDoc.querySelectorAll('.btn-call');
let callback = mainDoc.querySelector('.callback');
let btnsChat = mainDoc.querySelectorAll('.btn-chat');
let feedback = mainDoc.querySelector('.feedback');

btnMenu.addEventListener('click', function () {
    menu.classList.add('menu-open');
    menu.classList.remove('visibility-hidden');
    blur.classList.add('layer-blur_active');
});
function closeMenu () {
    menu.classList.remove('menu-open');
    menu.classList.add('visibility-hidden');
};
function closeCallback () {
    callback.classList.remove('modal-window-open');
    callback.classList.add('visibility-hidden');
};
function closeFeedback () {
    feedback.classList.remove('modal-window-open');
    feedback.classList.add('visibility-hidden');
};

blur.addEventListener('click', function () {
    closeMenu ();
    closeCallback ();
    closeFeedback ();
    blur.classList.remove('layer-blur_active');
});

for (let btn of btnsClose) {
    btn.addEventListener('click', function () {
        closeMenu ();
        closeCallback ();
        closeFeedback ();
        blur.classList.remove('layer-blur_active');
    });
};
for (let btn of btnsCall) {
    btn.addEventListener('click', function () {
        callback.classList.add('modal-window-open');
        callback.classList.remove('visibility-hidden');
        blur.classList.add('layer-blur_active');
        closeMenu ();
        closeFeedback ();
    });
};
for (let btn of btnsChat) {
    btn.addEventListener('click', function () {
        feedback.classList.add('modal-window-open');
        feedback.classList.remove('visibility-hidden');
        blur.classList.add('layer-blur_active');
        closeMenu ();
        closeCallback ();
    });
};

let menuNavItem = mainDoc.querySelectorAll('.main-menu__nav-item');
let menuNavLinks = mainDoc.querySelectorAll('.main-menu__nav-link');
let menuLangLinks = mainDoc.querySelectorAll('.lang__link');
let servicesNavLinks = mainDoc.querySelectorAll('.services__nav-link');

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

activeToggle(menuNavItem, 'main-menu__nav-link_active');
activeToggle(menuNavLinks, 'main-menu__nav-link_active');
activeToggle(menuLangLinks, 'lang__link_active');
activeToggle(servicesNavLinks, 'services__nav-link_active');

let menuSearchBtns = mainDoc.querySelectorAll('.btn-search');
let menuSearchForm = mainDoc.querySelector('.main-menu__search ');
for (let btn of menuSearchBtns) {
    btn.addEventListener('click', function () {
        menuSearchForm.classList.toggle('show-search-form');
    });
};

let readMore = mainDoc.querySelector('.read-more');
let servicesText = mainDoc.querySelector('.services__content-text');

readMore.addEventListener('click', function () {
    servicesText.classList.toggle('height-auto');
    readMore.classList.toggle('hide');
});

let showBrands = mainDoc.querySelector('.show-brands');
let brandWrapper = mainDoc.querySelector('.brand-wrapper');
let brandContainer = mainDoc.querySelector('.brands-container');

showBrands.addEventListener('click', function () {
    brandWrapper.classList.toggle('height-auto');
    brandContainer.classList.toggle('height-auto');
    showBrands.classList.toggle('hide');
});

let showTypes = mainDoc.querySelector('.show-types');
let typeWrapper = mainDoc.querySelector('.type-wrapper');
let typeContainer = mainDoc.querySelector('.types-container');

showTypes.addEventListener('click', function () {
    typeWrapper.classList.toggle('height-auto');
    typeContainer.classList.toggle('height-auto');
    showTypes.classList.toggle('hide');
});




const brandsSlider = mainDoc.querySelector('.brands-container');
const repairSevSlider = mainDoc.querySelector('.repair-services-container');
const typesSlider = mainDoc.querySelector('.types-container');

function mobileBrandsSlider() {
    
    if (window.innerWidth <= 768 && brandsSlider.dataset.mobile == 'false') {
        
        mySwiper1 = new Swiper (brandsSlider, {
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 1.25,
            breakpoints: {  
                360: {
                slidesPerView: 1.4,
                spaceBetween: 24
                },
                480: {
                slidesPerView: 1.8,
                },
                600: {
                    slidesPerView: 2.4,
                }
            }
        });
        
        brandsSlider.dataset.mobile = 'true';

    } if (window.innerWidth > 768) {
        brandsSlider.dataset.mobile = 'false';
        if (brandsSlider.classList.contains('swiper-container-initialized')){
            mySwiper1.destroy(); 
        }
    }    
}
function mobileRepairSevSlider() {
    
    if (window.innerWidth <= 768 && repairSevSlider.dataset.mobile == 'false') {
        
        mySwiper2 = new Swiper (repairSevSlider, {
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 1.25,
            breakpoints: {  
                360: {
                slidesPerView: 1.4,
                spaceBetween: 24
                },
                480: {
                slidesPerView: 1.8,
                },
                600: {
                    slidesPerView: 2.4,
                }
            }
        });
        
        repairSevSlider.dataset.mobile = 'true';

    } if (window.innerWidth > 768) {
        repairSevSlider.dataset.mobile = 'false';
        if (repairSevSlider.classList.contains('swiper-container-initialized')){
            mySwiper2.destroy(); 
        }
        
    }    
}
function mobileTypesSlider() {
    
    if (window.innerWidth <= 768 && typesSlider.dataset.mobile == 'false') {
        
        mySwiper3 = new Swiper (typesSlider, {
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 1.25,
            breakpoints: {  
                360: {
                slidesPerView: 1.4,
                spaceBetween: 24
                },
                480: {
                slidesPerView: 1.8,
                },
                600: {
                    slidesPerView: 2.4,
                }
            }
        });
        
        typesSlider.dataset.mobile = 'true';

    } if (window.innerWidth > 768) {
        typesSlider.dataset.mobile = 'false';
        if (typesSlider.classList.contains('swiper-container-initialized')){
            mySwiper3.destroy(); 
        } 
        
    }    
}
    
mobileBrandsSlider();
mobileRepairSevSlider();
mobileTypesSlider()

window.addEventListener('resize', () => {
    mobileBrandsSlider();
    mobileRepairSevSlider();
    mobileTypesSlider()
});



