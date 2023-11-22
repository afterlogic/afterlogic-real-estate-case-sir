import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
  Lazy,
  Keyboard
} from 'swiper';

Swiper.use([Navigation, Pagination, A11y, EffectCoverflow, Lazy, Keyboard]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));
const productSliderElement = document.querySelector('.product__slider');
const productNavBtns = document.querySelectorAll('.product__nav-btn');

if (productSliderElement) {
  const productSlider = new Swiper(productSliderElement, {
    slidesPerView: 1.5,
    slideToClickedSlide: true,
    spaceBetween: gap,
    lazy: true,
    speed: 2000,
    loop: true,
    autoHeight: true,
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
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
  });

  productNavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slideId = btn.getAttribute('data-slide-id');
      const targetSlideIndex = Array.from(productSlider.slides).findIndex((slide) => slide.id === slideId);

      if (targetSlideIndex !== -1) {
        productSlider.slideTo(targetSlideIndex);
      }
    });

    productSlider.on('slideChange', () => {
      const activeRealIndex = productSlider.realIndex;
      productNavBtns.forEach((btn, index) => {
        btn.classList.toggle('active', index === activeRealIndex);
      });
    });
  });
}
