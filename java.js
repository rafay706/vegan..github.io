$(document).ready(function ($) {
  $(".banner-owl").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
  });
  $(".category-wrapper").owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 900,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });
});

// Test Owl Java

$(".test-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
  },
});
