import Swiper, {
  Pagination,
  EffectCoverflow,
  A11y,
  Lazy,
  Keyboard,
} from 'swiper';

Swiper.use([Pagination, A11y, EffectCoverflow, Lazy, Keyboard]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));
const productSliderElement = document.querySelector('.product__slider');

if (productSliderElement) {
  const productSlider = new Swiper(productSliderElement, {
    // slidesPerView: 'auto',
    slidesPerView: 1.34,
    slideToClickedSlide: true,
    spaceBetween: gap,
    centeredSlides: true,
    lazy: true,
    speed: 2000,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      slideShadows: true,
    },
    pagination: {
      el: '.product__pag',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      nextSlideMessage: 'Next slide',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
  });
}
