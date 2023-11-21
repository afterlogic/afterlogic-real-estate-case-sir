import Swiper, {
  Navigation
} from 'swiper';
Swiper.use([Navigation]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--gap'));
const productSlider = document.querySelector('.product__slider')


if (productSlider) {
  const productItems = new Swiper(productSlider, {
    slidesPerView: 1.5,
    spaceBetween: gap,
    loop: true,
    navigation: {
      nextEl: '.product__next',
    }
  });
}
