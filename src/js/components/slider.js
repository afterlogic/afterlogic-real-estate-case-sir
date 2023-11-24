import Swiper, {
  Pagination,
  Navigation,
  EffectCoverflow,
  A11y,
  Lazy,
  Keyboard,
} from 'swiper';

Swiper.use([Pagination, Navigation, A11y, EffectCoverflow, Lazy, Keyboard]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));
const productSliderElement = document.querySelector('.product__slider');

if (productSliderElement) {
  const productSlider = new Swiper(productSliderElement, {
    slidesPerView: 1.5,
    slideToClickedSlide: true,
    spaceBetween: gap,
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
    navigation: {
      nextEl: ".swiper-button-next",
    },
    a11y: {
      nextSlideMessage: 'Next slide',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    on: {
      slideNextTransitionStart: function () {
        const activeSlide = this.slides[this.activeIndex];
        setProportionalHeight(activeSlide);
      },
      slidePrevTransitionStart: function () {
        const activeSlide = this.slides[this.activeIndex];
        setProportionalHeight(activeSlide);
      },
    },
    // on: {
    //   slideChangeTransitionEnd: function () { // Действия после завершения перехода между слайдами

    //   },
    //   slideNextTransitionStart: function () { // Действия при начале перехода к следующему слайду

    //   },
    //   slidePrevTransitionStart: function () { // Действия при начале перехода к предыдущему слайду

    //   },
    // },
  });
}

function setProportionalHeight(slide) {
  const img = slide.querySelector('.product__img');
  img.style.height = '455px';
  img.style.transition = 'height 0.5s';
}

function fullHeight(slide) {
  const img = slide.querySelector('.product__img');
  img.style.height = '100%';
  img.style.transition = 'height 0.5s';
}
