let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
menu.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 400,
  reset: true,
});
sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".form-container form", { delay: 800, origin: "left" });
sr.reveal(".heading", { delay: 800, origin: "top" });
sr.reveal(".ride-container .box", { delay: 600, origin: "top" });
sr.reveal(".services-container .box", { delay: 600, origin: "top" });
sr.reveal(".about-container .box", { delay: 600, origin: "top" });
sr.reveal(".reviews-container", { delay: 600, origin: "top" });
sr.reveal(".newsletter .box", { delay: 400, origin: "bottom" });
