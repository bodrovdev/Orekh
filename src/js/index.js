import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile-menu');
let nav_links = document.querySelectorAll('.main-nav__mobile-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');

  if (mobile_menu.classList.contains('main-nav__mobile-menu--active')) {
    mobile_menu.classList.remove('main-nav__mobile-menu--active');
    mobile_menu.classList.add('main-nav__mobile-menu--closing');
  }
  else {
    mobile_menu.classList.remove('main-nav__mobile-menu--closing');
    mobile_menu.classList.add('main-nav__mobile-menu--active');
  }

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

nav_links.forEach((element) => {
  element.addEventListener('click', () => {
    if (mobile_menu.classList.contains('main-nav__mobile-menu--active')) {
      mobile_menu.classList.remove('main-nav__mobile-menu--active');
      mobile_menu.classList.add('main-nav__mobile-menu--closing');

      burger.classList.remove('main-nav__burger--active');
      enableBodyScroll(mobile_menu);
    }
  })
})

//Активное состояние пункта навигации текущей страницы
function currentPage() {
  let page_id = document.querySelector('.page-content').id;

  let nav_links = document.querySelectorAll('.main-nav__mobile-link');
  nav_links.forEach((child) => {
    if (child.dataset.name === page_id) {
      child.classList.add('main-nav__mobile-link--active');
    }
  })
}

currentPage();

//Выпадающее меню с выбором категории на странице feedback
window.addEventListener('load', () => {
  if (document.getElementById('form1_select') === null) {
    return;
  }
  else {
    let form1_select = document.getElementById('form1_select');
    let form1_select_text = document.getElementById('form1_select_text');
    let form1_select_input = document.getElementById('form1_category');

    let form1_select_options = document.getElementById('form1_select_options');
    let form1_select_options_items = document.querySelectorAll('.feedbackPage-tabs__select-option--category');

    form1_select.addEventListener('click', () => {
      form1_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
      form1_select.classList.toggle('feedbackPage-tabs__select--active');
    })

    form1_select.addEventListener('keypress', function (event) {
      if (document.activeElement === form1_select && (event.key === "Enter" || event.key === "Space")) {
        event.preventDefault();
        form1_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
        form1_select.classList.toggle('feedbackPage-tabs__select--active');
      }
    });

    form1_select_options_items.forEach((child) => {
      child.addEventListener('click', () => {
        form1_select_text.textContent = child.dataset.value;
        form1_select_input.value = child.dataset.value;
        console.log(form1_select_input.value);

        form1_select_options.classList.remove('feedbackPage-tabs__select-options--active');
        form1_select.classList.remove('feedbackPage-tabs__select--active');
      })

      child.addEventListener('keypress', function (event) {
        if (document.activeElement === child && (event.key === "Enter" || event.key === "Space")) {
          event.preventDefault();

          form1_select_text.textContent = child.dataset.value;
          form1_select_input.value = child.dataset.value;
          console.log(form1_select_input.value);

          form1_select_options.classList.remove('feedbackPage-tabs__select-options--active');
          form1_select.classList.remove('feedbackPage-tabs__select--active');
        }
      })
    })

    document.addEventListener('click', (event) => {
      if (form1_select_options.classList.contains('feedbackPage-tabs__select-options--active')
        && event.target !== form1_select_options
        && event.target !== form1_select_text
        && event.target !== form1_select) {
        form1_select_options.classList.remove('feedbackPage-tabs__select-options--active');
        form1_select.classList.remove('feedbackPage-tabs__select--active');
      }
    })
  }
})

//Выпадающее меню с выбором места размещения на странице feedback
window.addEventListener('load', () => {
  if (document.getElementById('form1_select') === null) {
    return;
  }
  else {
    let form2_select = document.getElementById('form2_select');
    let form2_select_text = document.getElementById('form2_select_text');
    let form2_select_input = document.getElementById('form2_place');

    let form2_select_options = document.getElementById('form2_select_options');
    let form2_select_options_items = document.querySelectorAll('.feedbackPage-tabs__select-option--place');

    form2_select.addEventListener('click', () => {
      form2_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
      form2_select.classList.toggle('feedbackPage-tabs__select--active');
    })

    form2_select.addEventListener('keypress', function (event) {
      if (document.activeElement === form2_select && (event.key === "Enter" || event.key === "Space")) {
        event.preventDefault();
        form2_select_options.classList.toggle('feedbackPage-tabs__select-options--active');
        form2_select.classList.toggle('feedbackPage-tabs__select--active');
      }
    });

    form2_select_options_items.forEach((child) => {
      child.addEventListener('click', () => {
        form2_select_text.textContent = child.dataset.value;
        form2_select_input.value = child.dataset.value;
        console.log(form2_select_input.value);

        form2_select_options.classList.remove('feedbackPage-tabs__select-options--active');
        form2_select.classList.remove('feedbackPage-tabs__select--active');
      })

      child.addEventListener('keypress', function (event) {
        if (document.activeElement === child && (event.key === "Enter" || event.key === "Space")) {
          event.preventDefault();

          form2_select_text.textContent = child.dataset.value;
          form2_select_input.value = child.dataset.value;
          console.log(form2_select_input.value);

          form2_select_options.classList.remove('feedbackPage-tabs__select-options--active');
          form2_select.classList.remove('feedbackPage-tabs__select--active');
        }
      })
    })

    document.addEventListener('click', (event) => {
      if (form2_select_options.classList.contains('feedbackPage-tabs__select-options--active')
        && event.target !== form2_select_options
        && event.target !== form2_select_text
        && event.target !== form2_select) {
        form2_select_options.classList.remove('feedbackPage-tabs__select-options--active');
        form2_select.classList.remove('feedbackPage-tabs__select--active');
      }
    })
  }
})

//Следящий за мышью блок с данными о магазина на стране scheme
let flying_div = document.getElementById('fly');

window.addEventListener('load', () => {
  if (document.getElementById('tabs_scheme') === null) {
    return;
  }
  else {
    const onMouseMove = (e) => {
      flying_div.style.left = e.pageX + 'px';
      flying_div.style.top = e.pageY + 'px';
    }

    document.addEventListener('mousemove', onMouseMove);
  }
})

//Получение информации о магазине и её отображение в появляющемся блоке с данными
let map_items = document.querySelectorAll('.schemePage-map__item');
let flying_div_shopname = document.getElementById('fly_shopname');
let flying_div_workstart = document.getElementById('fly_workstart');
let flying_div_workend = document.getElementById('fly_workend');
let flying_div_isopen = document.getElementById('fly_isopen');

map_items.forEach((child) => {
  if (window.screen.width < 1024) {
    child.removeAttribute('href');
  }

  child.addEventListener('mouseenter', (e) => {
    flying_div.classList.add('schemePage-map__fly--active');
    flying_div_shopname.textContent = e.target.dataset.name;
    flying_div_workstart.textContent = e.target.dataset.open;
    flying_div_workend.textContent = e.target.dataset.close;

    let current_date = new Date();
    let start_time = e.target.dataset.open.split(':');
    let d1 = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate(), parseInt(start_time[0]), parseInt(start_time[1]));

    let end_time = e.target.dataset.close.split(':');
    let d2 = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate(), parseInt(end_time[0]), parseInt(end_time[1]));

    if (current_date >= d1 && current_date <= d2) {
      flying_div_isopen.textContent = 'Открыто';
    }
    else {
      flying_div_isopen.textContent = 'Закрыто';
    }
  })

  child.addEventListener('mouseleave', (e) => {
    flying_div.classList.remove('schemePage-map__fly--active');
  })
})

//Модальное окно с информацией о выбранном магазине на мобильной версии сайта
let tabs_modal = document.getElementById('tabs_modal');
let tabs_modal_close = document.getElementById('tabs_modal_close');
let tabs_modal_name = document.getElementById('tabs_modal_name');
let tabs_modal_workstart = document.getElementById('tabs_modal_workstart');
let tabs_modal_workend = document.getElementById('tabs_modal_workend');
let tabs_modal_isopen = document.getElementById('tabs_modal_isopen');

map_items.forEach((child) => {
  child.addEventListener('click', () => {
    tabs_modal.classList.add('schemePage-map__tabs-modal--active');
    tabs_modal_name.textContent = child.dataset.name;
    tabs_modal_workstart.textContent = child.dataset.open;
    tabs_modal_workend.textContent = child.dataset.close;

    let current_date = new Date();
    let start_time = child.dataset.open.split(':');
    let d1 = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate(), parseInt(start_time[0]), parseInt(start_time[1]));

    let end_time = child.dataset.close.split(':');
    let d2 = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate(), parseInt(end_time[0]), parseInt(end_time[1]));

    if (current_date >= d1 && current_date <= d2) {
      tabs_modal_isopen.textContent = 'Открыто';
    }
    else {
      tabs_modal_isopen.textContent = 'Закрыто';
    }

  })
})

window.addEventListener('load', () => {
  if (document.getElementById('tabs_scheme') === null) {
    return;
  }
  else {
    tabs_modal_close.addEventListener('click', () => {
      tabs_modal.classList.remove('schemePage-map__tabs-modal--active');
    })
  }
})

//Открытие определённого таба при переходе по ссылке
window.addEventListener('load', () => {
  if (document.getElementById('tabs_scheme') === null) {
    return;
  }
  else {
    let tabs_buttons = document.querySelectorAll('.schemePage-map__tabs-button');
    tabs_buttons[window.location.hash.split('#')[1] - 1].click();
  }
})