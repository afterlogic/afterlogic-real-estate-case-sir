import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
  Parallax
} from 'swiper';
Swiper.use([Navigation, Pagination, A11y, EffectCoverflow, Parallax]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));
const productSliderElement = document.querySelector('.product__slider');
const productNavBtns = document.querySelectorAll('.product__nav-btn');
const productNextBtn = document.querySelector('.product__next');

let productSlider;
let isAnimating = false;

if (productSliderElement) {
  productSlider = new Swiper(productSliderElement, {
    slidesPerView: 1.5,
    spaceBetween: gap,
    parallax: true,
    speed: 2000,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      slideShadows: true,
      stretch: 0,
    },
    navigation: {
      nextEl: '.product__next',
    },
    pagination: {
      el: '.product__pag',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      nextSlideMessage: 'Next slide',
    },
  });
}

productNavBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const slideId = btn.getAttribute('data-slide-id');
    const targetSlideIndex = Array.from(productSlider.slides).findIndex((slide) => slide.id === slideId);

    if (targetSlideIndex !== -1) {
      productSlider.slideTo(targetSlideIndex);
    }
  });
});


if (productSlider) {
  productSlider.on('slideChange', () => {
    const activeRealIndex = productSlider.realIndex;
    productNavBtns.forEach((btn, index) => {
      btn.classList.toggle('active', index === activeRealIndex);
    });
  });
}
