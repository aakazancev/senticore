/* --------------
--- Mobile menu--
--------------- */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const overlayNav = document.querySelector(".overlay-nav");
const closeNav = document.querySelector(".close-nav");
const body = document.body;

// const toggleElements = function () {
//   nav.classList.toggle("show");
//   overlayNav.classList.toggle("show");
//   closeNav.classList.toggle("show");
//   body.classList.toggle("overflow");
// };

// burger.onclick = toggleElements;
// closeNav.onclick = toggleElements;
// overlayNav.onclick = toggleElements;

// Модуальные окна


/* --------------
--- Swiper Set --
--------------- */

const swiperCase = new Swiper('.swiper_case', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.case-study__next',
    prevEl: '.case-study__prev',
  },
})

const swiperRev = new Swiper('.reviews__swiper', {
  slidesPerView: 2,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.case-study__next',
    prevEl: '.case-study__prev',
  },
})

/* ----––---------
----jquery tab---
---------------- */

  $(function() {
    
    $('.bullets__tab').on('click', '.bullets__tab-item:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.bullets__grid').find('div.bullets__content-item').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });