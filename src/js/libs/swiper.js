import Swiper from 'swiper/bundle';

let news_slider_2 = new Swiper(".newsCatalogue-item__thumb-slider", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

let news_slider = new Swiper(".newsCatalogue-item__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  thumbs: {
    swiper: news_slider_2,
  },
});