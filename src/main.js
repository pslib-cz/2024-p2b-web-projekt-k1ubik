import './styles/style.css';
import './styles/normalize.css';
import './styles/components.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });