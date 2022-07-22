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

const swiper = new Swiper('.popular__swiper', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
});
