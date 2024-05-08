//* Подключение библиотеки
// npm i wowjs --save-dev
import WOW from "wow.js";

//* Подключение списка активных модулей
import { flsModules } from "../files/modules.js";

//* Дата атрибуты для работы с библиотекой
// data-wow-duration: длительность
// data-wow-delay: задержка
// data-wow-offset: отступ от нижнего края
// data-wow-iteration: количество повторений

flsModules.wow = new WOW({
   boxClass:     'wow',     
   animateClass: 'animated',
   offset:       0,         
   mobile:       true,      
   live:         true       
}).init();