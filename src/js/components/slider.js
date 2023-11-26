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
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    touchRatio: 0,
    spaceBetween: gap,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    speed: 2000,
    // centeredSlides: true,
    // loop: true,
    initialSlide: 1,
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


function setHeight(slide) {
  const img = slide.querySelector('.product__img');
  const aspectRatio = 780 / 455;

  img.style.aspectRatio = aspectRatio;
  img.style.transition = 'aspect-ratio 1s ease';
}

function resetHeight(slide) {
  const img = slide.querySelector('.product__img');

  img.style.aspectRatio = 780 / 700;
  img.style.transition = 'aspect-ratio 1s ease';
}

// const tabsBtn = document.querySelectorAll('.product__tab-btn')
// const blockSlider = document.querySelectorAll('.product__slider-block')

// tabsBtn.forEach(tab => {
//   tab.addEventListener('click', (e) => {
//     tabsBtn.forEach(btn => {
//       btn.classList.remove('active');
//     });

//     e.target.classList.add('active');

//     blockSlider.forEach(slider => {
//       slider.classList.remove('show');
//     });

//     const tabIndex = e.target.dataset.tab
//     const thisSlider = document.getElementById(tabIndex);
//     thisSlider.classList.add('show')
//   });
// });
