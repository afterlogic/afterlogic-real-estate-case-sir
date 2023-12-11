  import {
    initializeSwiper
  } from './slider';

  const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
  let currentSlider = initializeSwiper(document.querySelector('.product__slider-block.show .swiper'));

  const removeActiveClass = () => {
    tabsBtn.forEach((btn) => {
      btn.classList.remove('active');
    });
  };

  const hideAllSliderBlocks = () => {
    document.querySelectorAll('.product__slider-block').forEach((slider) => {
      slider.classList.remove('show');
    });
  };

  const handleTabClick = (e) => {
    removeActiveClass();
    e.target.classList.add('active');

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
