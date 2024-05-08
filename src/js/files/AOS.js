/*
Документация по работе в шаблоне: https://michalsnik.github.io/aos/
Документация плагина: https://github.com/michalsnik/aos
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();