imagesLoaded(document.querySelectorAll('img'),
  function (instance) {
    console.log('Le immagini sono state caricate corretamente');
  });

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
//   effect: 'fade',
  speed: 1000,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

swiper.on('slideChange', function () {
  console.log('slide cambiata');
});