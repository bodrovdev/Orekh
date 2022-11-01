import Swiper from 'swiper/bundle';

let floorsSwiper = new Swiper('.test', {
  slidesPerView: 1,
  direction: 'horizontal',
});

// let floorsSwiper = Swiper;
// let init = false;

// function swiperMode() {
//   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
//   let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
//   let desktop = window.matchMedia('(min-width: 1024px)');

//   // Инициализация свайпера для мобильных устройств
//   if (mobile.matches) {
//     if (!init) {
//       init = true;
//       floorsSwiper = new Swiper('.inside__test-slider', {
//         slidesPerView: 1,
//         loop: true,
//         spaceBetween: 10,
//         direction: 'horizontal',
//       });
//     }
//   }

//   // Уничтожение слайдера на планшетах
//   else if (tablet.matches) {
//     floorsSwiper.destroy();
//     init = false;
//   }

//   // Уничтожение слайдера на десктопе
//   else if (desktop.matches) {
//     floorsSwiper.destroy();
//     init = false;
//   }
// }

// window.addEventListener('load', function () {
//   swiperMode();
// });


// window.addEventListener('resize', function () {
//   swiperMode();
// });