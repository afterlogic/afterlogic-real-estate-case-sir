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
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    spaceBetween: gap,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    speed: 1000,
    initialSlide: 1,
    // loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
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
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      639: {
        slidesPerView: 1.1,
        spaceBetween: 50,
        touchRatio: 1,
      },
      1024: {
        slidesPerView: 1.5,
        touchRatio: 0,
      }
    },
    on: {
      init: function () {
        setHeight(this.slides[this.activeIndex]);
      },
      slideChange: function () {
        setTimeout(() => {
          const currentSlide = this.slides[this.activeIndex];
          const previousSlide = this.slides[this.previousIndex];

          resetHeight(previousSlide);
          setHeight(currentSlide);
        }, 1000);
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
