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

export const initializeSwiper = (swiperContainer) => {
  return new Swiper(swiperContainer, {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    touchRatio: 0,
    spaceBetween: gap,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    speed: 1500,
    // centeredSlides: true,
    // loop: true,
    // initialSlide: 1,
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
      nextEl: '.swiper-button-next',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    on: {
      init: function () {
        setHeight(this.slides[this.activeIndex]);
      },
      slideChange: function () {
        const currentSlide = this.slides[this.activeIndex];
        const previousSlide = this.slides[this.previousIndex];

        resetHeight(previousSlide)
        setHeight(currentSlide);
      },
    },
  });
}

function setHeight(slide) {
  const img = slide.querySelector('.product__img');
  img.style.aspectRatio = 780 / 455;
}

export function resetHeight(slide) {
  const img = slide.querySelector('.product__img');
  img.style.aspectRatio = 780 / 700;
}
