  import {
    initializeSwiper
  } from './slider';

  const tabsBtn = document.querySelectorAll('.js-tabs-btn');
  let currentSlider = initializeSwiper(document.querySelector('.js-slider-block.show .swiper'));

  const removeActiveClass = () => {
    tabsBtn.forEach((btn) => {
      btn.classList.remove('is-current');
    });
  };

  const hideAllSliderBlocks = () => {
    document.querySelectorAll('.js-slider-block').forEach((slider) => {
      slider.classList.remove('show');
    });
  };

  const handleTabClick = (e) => {
    if (currentSlider) {
      currentSlider.destroy();
    }

    removeActiveClass();
    e.target.classList.add('is-current');

    hideAllSliderBlocks();

    const tabIndex = e.target.dataset.tab;
    const swiperSlider = document.getElementById(tabIndex);
    swiperSlider.classList.add('show');

    const activeSlider = swiperSlider.querySelector('.swiper');
    currentSlider = initializeSwiper(activeSlider);
  };

  tabsBtn.forEach((tab) => {
    tab.addEventListener('click', handleTabClick);
  });
