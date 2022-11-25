// Слайдер
console.log('1');
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Вопросы

let question = document.querySelectorAll('.question__item');

question.forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.querySelector('.para').style.maxHeight) {
      element.querySelector('.para').style.maxHeight = null;
      element.querySelector('.para').style.padding = null;
      element.querySelector('.para-svg').classList.remove('para-svg-active');
    } else {
      document.querySelectorAll('.para').forEach(function (e) {
        e.style.maxHeight = null;
        document.querySelectorAll('.para-svg').forEach(function (e) {
          e.classList.remove('para-svg-active');
        });
      });
      element.querySelector('.para').style.maxHeight = '1000' + "px";
      element.querySelector('.para').style.padding = '30px 0 40px 0';
      element.querySelector('.para-svg').classList.add('para-svg-active');
    }
  });
});

// Табс ворк

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active');
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Burger Menu

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header-link");

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('header-nav-active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger-active');
    menu.classList.remove('header-nav-active');
    document.body.classList.remove('stop-scroll');
  });
});

// Поиск

let windowInnerWidth = window.innerWidth;
let form = document.querySelector('.header__form');



form.querySelector('.header__search').addEventListener('click', function () {
  if (document.querySelector('.header__search').classList.contains('search--active')) {
    form.submit();
  } else {
    if (window.innerWidth >= '768') {
      form.querySelector('.header__search').classList.add('search--active');
      form.querySelector('.close').classList.remove('hidden');
      form.querySelector('.header__input').style.height = '60px';
      form.querySelector('.header__input').style.width = '539px';
      form.querySelector('.header__input').style.opacity = '1';
      form.querySelector('.header__input').style.top = '-14px';
      form.querySelector('.header__input').style.right = '-51px';
      form.querySelector('.header__input').style.padding = '16px 95px 16px 32px';
    } else {
      form.style.position = 'static';
      form.style.zIndex = '10000';
      form.querySelector('.header__search').classList.add('search--active');
      form.querySelector('.header__search').style.position = 'absolute';
      form.querySelector('.header__search').style.right = '50px';
      form.querySelector('.close').classList.remove('hidden');
      form.querySelector('.close').style.left = '0px';
      form.querySelector('.close').style.top = '0';
      form.querySelector('.header__input').style.height = '69px';
      form.querySelector('.header__input').style.width = '100%';
      form.querySelector('.header__input').style.opacity = '1';
      form.querySelector('.header__input').style.top = '0';
      form.querySelector('.header__input').style.right = '0';
      form.querySelector('.header__input').style.left = '0';
      form.querySelector('.header__input').style.padding = '22px 15px';
    }
  }
});

form.querySelector('.close').addEventListener('click', function () {
  if (window.innerWidth >= '768') {
    form.querySelector('.header__search').classList.remove('search--active');
    form.querySelector('.close').classList.add('hidden');
    form.querySelector('.header__input').style.height = '0';
    form.querySelector('.header__input').style.width = '0';
    form.querySelector('.header__input').style.opacity = '0';
    form.querySelector('.header__input').style.padding = '0';
  } else {
    form.style.position = 'relative';
    form.style.zIndex = '1';
    form.querySelector('.header__search').classList.remove('search--active');
    form.querySelector('.header__search').style.position = 'relative';
    form.querySelector('.header__search').style.right = '0';
    form.querySelector('.close').classList.add('hidden');
    form.querySelector('.close').style.left = '0px';
    form.querySelector('.close').style.top = '0';
    form.querySelector('.header__input').style.height = '0';
    form.querySelector('.header__input').style.width = '100%';
    form.querySelector('.header__input').style.opacity = '0';
    form.querySelector('.header__input').style.top = '0';
    form.querySelector('.header__input').style.right = '0';
    form.querySelector('.header__input').style.left = '0';
    form.querySelector('.header__input').style.padding = '0';
  }
});

console.log('2');
