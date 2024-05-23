import { removeClasses } from "./functions.js";

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
  $(".row-slider").each(function (slider) {
    $(this)
      .find(".row-slider__slider")
      .slick({
        infinite: false,
        slidesToShow: 4,
        prevArrow: this.closest(".row-slider").querySelector(".row-slider__button_prev"),
        nextArrow: this.closest(".row-slider").querySelector(".row-slider__button_next"),
        speed: 800,
        lazyLoad: "progressive",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  });
  $(".row-slider-3").each(function (slider) {
    $(this)
      .find(".row-slider__slider")
      .slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: this.closest(".row-slider-3").querySelector(".row-slider__button_prev"),
        nextArrow: this.closest(".row-slider-3").querySelector(".row-slider__button_next"),
        speed: 800,
        lazyLoad: "progressive",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  });
  $(".cases-slider").each(function (slider) {
    $(this).slick({
      variableWidth: true,
      arrows: false,
      speed: 800,
    });
  });
});

// Tabs with colors
if (document.querySelector(".tabs-card__colors")) {
  const buttonBlocks = document.querySelectorAll(".tabs-card__colors");
  buttonBlocks.forEach((block) => {
    const buttons = block.querySelectorAll(".tabs-card__color");
    block.addEventListener("click", function (e) {
      if (e.target.closest(".tabs-card__color")) {
        removeClasses(buttons, "_active-button");
        e.target.closest(".tabs-card__color").classList.add("_active-button");
      }
    });
  });
}

$(".footer__link").mouseenter(function () {
  $(`.footer__image-2`).removeClass("_active");
  $(`.footer__image-${$(this).attr("data-src").substring(10)}`).addClass("_active");
});

$(".footer__link").mouseleave(function () {
  $(`.footer__image-${$(this).attr("data-src").substring(10)}`).removeClass("_active");
  $(`.footer__image-2`).addClass("_active");
});
