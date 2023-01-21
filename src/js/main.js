import 'normalize.css';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/style.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true

});

document.querySelector(".nav-toggle").addEventListener('click', (event) => {
    event.preventDefault()

    document.querySelector(".header").classList.toggle("header--open")
})