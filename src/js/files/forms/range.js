// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSliders = document.querySelectorAll("[data-range-slider]");
  if (priceSliders.length > 0) {
    priceSliders.forEach((slider) => {
      let textFrom = parseInt(slider.getAttribute("data-from"));
      let textTo = parseInt(slider.getAttribute("data-to"));
      noUiSlider.create(slider, {
        start: [textFrom, textTo],
        connect: [false, true, false],
        tooltips: true,
        step: 5,
        range: {
          min: [textFrom],
          max: [textTo],
        },
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          },
        },
      });
    });
  }
}
rangeInit();
