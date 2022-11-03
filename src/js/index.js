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

// function currentPage() {
//   let pageId = document.querySelector('.page-content').id;

//   let navLinks = document.querySelectorAll('.main-nav__mobile-link');
//   navLinks.forEach((child) => {
//     if (child.dataset.name === pageId) {
//       child.classList.add('main-nav__mobile-link--active');
//     }
//   })
// }

// currentPage();

//Выпадашка в форме на странице аренда и реклама
let form_select = document.getElementById('form_1_select');
let form_select_text = document.querySelector('.feedbackPage-tabs__select-text');
let form_select_input = document.getElementById('form_1_select_input');

let form_select_options = document.getElementById('form_1_select_options');
let form_select_options_items = document.querySelectorAll('.feedbackPage-tabs__select-option');

form_select.addEventListener('click', () => {
  form_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
})

form_select.addEventListener('keypress', function (event) {
  if (document.activeElement === form_select && (event.key === "Enter" || event.key === "Space")) {
    event.preventDefault();
    form_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
  }
});

form_select_options_items.forEach((child) => {
  child.addEventListener('click', () => {
    form_select_text.textContent = child.dataset.value;
    form_select_input.value = child.dataset.value;

    form_select_options.classList.remove('feedbackPage-tabs__select-options--active');
  })
})

document.addEventListener('click', (event) => {
  if (form_select_options.classList.contains('feedbackPage-tabs__select-options--active')
    && event.target !== form_select_options
    && event.target !== form_select_text
    && event.target !== form_select) {
    form_select_options.classList.remove('feedbackPage-tabs__select-options--active');
  }
})