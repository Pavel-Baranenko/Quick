const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 600,
  parallax: true,
  // effect: "fade",
});
const swiper1 = new Swiper('.swiper-offer', {
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  speed: 600,
  parallax: true,
  // effect: "fade",
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const drop = document.querySelectorAll('.variations-item');

drop.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  })
})