$(document).ready(function () {
  $(".slider__slider").each(function (slider) {
    $(this).slick({
      prevArrow: this.closest(".slider").querySelector(".slider__button_prev"),
      nextArrow: this.closest(".slider").querySelector(".slider__button_next"),
      speed: 800,
      lazyLoad: "progressive",
    });
  });
  $(".overflow-slider").each(function (slider) {
    $(this)
      .find(".overflow-slider__slider")
      .slick({
        prevArrow: this.closest(".overflow-slider").querySelector(".slider__button_prev"),
        nextArrow: this.closest(".overflow-slider").querySelector(".slider__button_next"),
        speed: 800,
        lazyLoad: "progressive",
      });
  });
  $(".linked-slider").each(function (slider) {
    $(this)
      .find(".linked-slider__text-slider")
      .slick({
        prevArrow: this.querySelector(".slider__button_prev"),
        nextArrow: this.querySelector(".slider__button_next"),
        speed: 800,
        asNavFor: $(this).find(".linked-slider__slider-block"),
      });
    $(this).find(".linked-slider__slider-block").slick({
      speed: 800,
      fade: true,
      arrows: false,
    });
  });
});
