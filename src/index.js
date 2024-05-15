// const { Autoplay, Pagination, Navigation } = require("swiper/modules");

// import Swiper from '/swiper/bundle';
// import '/swiper/css/bundle';

// window.addEventListener('scroll', function(){
//   const navbar = document.querySelector('.navbar');
//   const navinfo = document.querySelector('.nav-info-container')
//   const scrollPosition = window.scrollY;

//   if (window.innerWidth > 768) {
//     if (scrollPosition >= 40) {
//       navbar.classList.add('fixed');
//       navinfo.classList.add('scroll-fixed')
//     } else {
//       navbar.classList.remove('fixed');
//       navinfo.classList.remove('scroll-fixed')
//     }
//   }
// });

// aside = document.querySelector('.aside-nav')
// menuIcon = document.querySelector('.menu-icon')
// closeIcon = document.querySelector('.aside-x')

// menuIcon.addEventListener('click', () => {
//     aside.classList.toggle('display-toggle');
//     body.classList.toggle('overflow-toggle')
// });

// closeIcon.addEventListener('click', () => {
//     aside.classList.toggle('display-toggle');
//     body.classList.toggle('overflow-toggle')
// });

// window.addEventListener('scroll', function(){
//   const navbar = document.querySelector('.navbar');
//   const navinfo = document.querySelector('.nav-info-container')
//   const scrollPosition = window.scrollY;

//   if (window.innerWidth > 768) {
//     if (scrollPosition >= 40) {
//       navbar.classList.add('fixed');
//       navinfo.classList.add('scroll-fixed')
//     } else {
//       navbar.classList.remove('fixed');
//       navinfo.classList.remove('scroll-fixed')
//     }
//   }
// });

// // var dataAtual = new Date();

// // // Obtém o ano atual
// // var anoAtual = dataAtual.getFullYear();

// // var elementDate = document.querySelector('.year-date');
// // elementDate.innerText = anoAtual;
console.log("inicializando swiper");
const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },

    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1]
        },

        next: {
            translate: ["100%", 0, 0]
        }
    }
});

