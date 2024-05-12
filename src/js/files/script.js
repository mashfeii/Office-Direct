$(document).ready(function () {
  $(".slider__slider").slick({
    prevArrow: ".slider__button_prev",
    nextArrow: ".slider__button_next",
    speed: 800,
    lazyLoad: "progressive",
  });
});
