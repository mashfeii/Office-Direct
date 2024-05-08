//* Документация по работе с библиотекой:
// https://dixonandmoe.com/rellax/

//* Установка через npm-пакет и подключение:
// npm install rellax --save-dev
import Rellax from "rellax";

//* Подключение списка активных модулей
import { flsModules } from "../files/modules.js";

//* Дата атрибуты для работы с библиотекой:
/**
 * data-rellax-speed=""
 * 
 * data-rellax-xs-speed=""
 * data-rellax-mobile-speed=""
 * data-rellax-tablet-speed=""
 * data-rellax-desktop-speed=""
 * 
 * data-rellax-horizontal-speed=""
 * data-rellax-vertical-speed=""
 * 
 * data-rellax-vertical-scroll-axis="xy" 
*/

//* Методы:
// rellax.refresh()
// rellax.destroy();

if (document.querySelector(".")) {
   //* Подключение в список активных модулей
   flsModules.rellax = new Rellax(".", {
      //* Определение брейкпоинтов для мобильной/планшетной/десктопной версий
      // breakpoints: [576, 768, 1201]

      //* Коллбэк-функция
      // callback: function(positions) {
      //    console.log(positions);
      // }
   });
}