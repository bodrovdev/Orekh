import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Мобильное меню
let burger = document.getElementById('burger');
let mobileMenu = document.getElementById('mobile-menu');
let navLinks = document.querySelectorAll('.main-nav__mobile-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');

  if (mobileMenu.classList.contains('main-nav__mobile-menu--active')) {
    mobileMenu.classList.remove('main-nav__mobile-menu--active');
    mobileMenu.classList.add('main-nav__mobile-menu--closing');
  }
  else {
    mobileMenu.classList.remove('main-nav__mobile-menu--closing');
    mobileMenu.classList.add('main-nav__mobile-menu--active');
  }

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobileMenu);
  }
  else {
    enableBodyScroll(mobileMenu);
  }
})

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    if (mobileMenu.classList.contains('main-nav__mobile-menu--active')) {
      mobileMenu.classList.remove('main-nav__mobile-menu--active');
      mobileMenu.classList.add('main-nav__mobile-menu--closing');

      burger.classList.remove('main-nav__burger--active');
      enableBodyScroll(mobileMenu);
    }
  })
})

//Показ строки поиска
let search_button = document.getElementById('search_button');
let search_field = document.getElementById('search_field');

search_button.addEventListener('click', () => {
  search_field.classList.toggle('main-nav__search-field--active');
})