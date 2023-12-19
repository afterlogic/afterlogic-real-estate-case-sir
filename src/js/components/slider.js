import {
  isMobileViewPort
}
from '../functions/check-viewport';

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
  return new Swiper(swiperContainer, {
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
      dynamicBullets: true,
      clickable: false,
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
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        pagination: {
          clickable: true
        },
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        pagination: {
          clickable: true
        },
      },
      865: {
        slidesPerView: 1.1,
        spaceBetween: 40,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        pagination: {
          clickable: true
        },
      },
      1025: {
        slidesPerView: 1.5,
        spaceBetween: 40,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        pagination: {
          clickable: false
        }
      },
      1440: {
        slidesPerView: 1.5,
        spaceBetween: 60,
        pagination: {
          clickable: false
        }
      }
    },
    on: {
      slideChange: function () {
        if (isMobileViewPort()) {
          const activeSlide = this.slides[this.activeIndex];
          const previousSlide = this.slides[this.previousIndex];
          const productContents = activeSlide.querySelectorAll('.js-product-content');
          const allProductImgs = document.querySelectorAll('.swiper-slide .js-product-img');

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

        } else {
          const allProductImgs = document.querySelectorAll('.swiper-slide .js-product-img');

          allProductImgs.forEach((img) => {
            img.style.marginBottom = '0'
            img.style.aspectRatio = 780 / 700
          });
        }
      }
    }
  });
}

function setHeight(slide) {
  const productImg = slide.querySelector('.js-product-img');
  const productContent = slide.querySelector('.js-product-content')

  productImg.style.aspectRatio = 780 / 455;
  productContent.style.transition = 'opacity 1s ease 1s, visibility 1s ease 1s';
}

function resetHeight(slide) {
  const productImg = slide.querySelector('.js-product-img');
  const productContent = slide.querySelector('.js-product-content')

  productImg.style.aspectRatio = 780 / 700;
  productContent.style.transition = 'opacity 1s ease 0.1s, visibility 1s ease 0.1s';
}
