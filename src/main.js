import './styles/style.css';
import './styles/normalize.css';
import './styles/components.css';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 50, // Adjust delay for autoplay
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})});
