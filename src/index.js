// const body = document.querySelector("body")

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

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true
});