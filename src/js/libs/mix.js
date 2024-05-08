//* Подключение библиотеки
// npm install --save-dev mixitup
import mixitup from "mixitup";

//* Подключение списка активных модулей
import { flsModules } from "../files/modules.js";

if (document.querySelector(".")) {
   flsModules.mixer = mixitup(".", {
      selectors: {
         target: ".",
      }
   })
}