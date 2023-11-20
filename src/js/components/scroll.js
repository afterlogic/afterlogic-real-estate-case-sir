import SmoothScroll from 'smooth-scroll';

const links = document.querySelectorAll('a[data-menu-item]');

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration: true,
});
