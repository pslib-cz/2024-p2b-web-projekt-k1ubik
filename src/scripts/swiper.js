import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper1', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },  
});
const swiper2 = new Swiper('.swiper2', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },  
});
const swiper3 = new Swiper('.swiper3', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },  
});
const swiper4 = new Swiper('.swiper4', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },  
});