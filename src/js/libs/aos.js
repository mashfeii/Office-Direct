//* Подключение библиотеки
// npm i aos --save-dev
import AOS from "aos";
//* Подключение набора стилей
import "aos/dist/aos.css";

//* Подключение списка активных модулей
import { flsModules } from "../files/modules.js";
flsModules.animos = AOS.init();