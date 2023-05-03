const swiper = new Swiper('.clients-slider', {
    slidesPerView: 4,
    freeMode: true,
    navigation: {
        clickable: true,
    },
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        1440: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        768: {
            slidesPerView: 4,
        },
        425: {
            slidesPerView: 2.5,
        },
        375: {
            slidesPerView: 2.4,
        },
        320: {
            slidesPerView: 2.3,
        }
    }
});

let mybutton = document.getElementById("myBtn");
let navbar = document.querySelector('.navbar');
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        navbar.classList.add('navbar_white');
    } else {
        mybutton.style.display = "none";
        navbar.classList.remove('navbar_white');
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const burgerMenu = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('navbar__link');
menuList.onclick = function hideMenu() {
    burgerMenu.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.remove('lockScroll');
}
burgerMenu.onclick = function showBurger() {
    this.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.toggle('lockScroll');
}