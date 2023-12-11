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
    speed: 1500,
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
      dynamicBullets: true
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
        const activeSlide = this.slides[this.activeIndex];

        const slidersToDestroy = Array.from(document.querySelectorAll('.swiper'))
          .filter(container => container !== swiperContainer);

        slidersToDestroy.forEach(container => {
          if (container.swiper) {
            container.swiper.destroy(true, true);
          }
        });
      },
    },
  });

  productSlider.on('slideChange', function () {
    const activeSlide = this.slides[this.activeIndex];
    const previousSlide = this.slides[this.previousIndex];
    const productContents = activeSlide.querySelectorAll('.product__content');
    const allProductImgs = document.querySelectorAll('.swiper-slide .product__img');

    const productContentsHeight = Array.from(productContents).reduce(
      (sumHeight, content) => sumHeight + content.offsetHeight,
      0
    );

    allProductImgs.forEach((img) => {
      const isCurrentSlide = img.closest('.swiper-slide') === activeSlide;
      img.style.marginBottom = isCurrentSlide ? '0' : `-${productContentsHeight}px`;
    });

    resetHeight(previousSlide);
    setHeight(activeSlide);
  })
}


function setHeight(slide) {
  const productImg = slide.querySelector('.product__img');
  const productContent = slide.querySelector('.product__content')

  productImg.style.aspectRatio = 780 / 455;
  productContent.style.transition = 'opacity 1s ease 1s, visibility 1s ease 1s';
}

export function resetHeight(slide) {
  const productImg = slide.querySelector('.product__img');
  const productContent = slide.querySelector('.product__content')

  productImg.style.aspectRatio = 780 / 700;
  productContent.style.transition = 'opacity 1s ease 0.1s, visibility 1s ease 0.1s';
}
