/* --------------
--- Mobile menu--
--------------- */
const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__burger-menu");
const closeNav = document.querySelector(".nav__burger-close");
const body = document.body;

const toggleElements = function () {
  nav.classList.toggle("show");
  body.classList.toggle("overflow");
};

burger.onclick = toggleElements;
closeNav.onclick = toggleElements;



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
    clickable: true
  },
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
})

const swiperPartner = new Swiper('.partners__swiper', {
  slidesPerView: 5,
  spaceBetween: 32,
  loop: true,
  speed: 5000,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  freeMode: {
    enabled: true
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 32
    }
  }
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