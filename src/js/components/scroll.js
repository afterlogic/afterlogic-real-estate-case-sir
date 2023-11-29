import SmoothScroll from 'smooth-scroll';

const links = document.querySelectorAll('a[data-menu-item]');

const scroll = new SmoothScroll('a[data-menu-item]', {
  speed: 100,
  speedAsDuration: true,
});
