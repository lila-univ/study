// Header //
let menu = document.querySelector('#icon img');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('active');
}

// Swiper //

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed:1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  