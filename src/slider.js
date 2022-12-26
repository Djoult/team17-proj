

new Swiper('.reviews__swiper', {
  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 40,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
