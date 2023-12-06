import Swiper from 'swiper';
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  A11y,
  Keyboard,
} from 'swiper/modules';

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));

export const initializeSwiper = (swiperContainer) => {
  const productSlider = new Swiper(swiperContainer, {
    modules: [Pagination, Navigation, A11y, EffectCoverflow, Keyboard],
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    preventClicks: true,
    preventInteractionOnTransition: true,
    slidesOffsetBefore: -210,
    spaceBetween: gap,
    speed: 1000,
    loop: true,
    loopAdditionalSlides: 1,
    loopPreventsSliding: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
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
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        centeredSlides: false,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        centeredSlides: false,
      },
      641: {
        slidesPerView: 1.5,
        spaceBetween: 50,
        slidesOffsetBefore: 0,
        centeredSlides: false,
      },
      1025: {
        slidesPerView: 1.8,
        spaceBetween: 40,
        touchRatio: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
      },
      1440: {
        slidesPerView: 1.5,
        touchRatio: 0,
      }
    },
    on: {
      init: function () {
        this.slides.forEach((slide, index) => {
          slide.addEventListener('click', () => {
            console.log('Clicked on slide', index);
          });
        });
      },
      slideChange: function () {
        const currentSlide = this.slides[this.activeIndex];
        const previousSlide = this.slides[this.previousIndex];

        resetHeight(previousSlide);
        setHeight(currentSlide);
      }
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
