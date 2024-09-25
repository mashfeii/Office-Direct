import gulp from "gulp";
import { plugins } from "./config/gulp-plugins.js";
import { path } from "./config/gulp-settings.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  isWebP: !process.argv.includes("--nowebp"),
  isFontsReW: process.argv.includes("--rewrite"),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { cssVendors } from "./config/gulp-tasks/css-vendors.js";
import { css } from "./config/gulp-tasks/css.js";
import { fonstStyle, convertFonts } from "./config/gulp-tasks/fonts.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { html } from "./config/gulp-tasks/html.js";
import { images } from "./config/gulp-tasks/images.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { js } from "./config/gulp-tasks/js.js";
import { reset } from "./config/gulp-tasks/reset.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { zip } from "./config/gulp-tasks/zip.js";

const fonts = gulp.series(reset, convertFonts, fonstStyle);
const devTasks = gulp.parallel(fonts, gitignore);
const buildTasks = gulp.series(
  fonts,
  jsDev,
  js,
  gulp.parallel(html, css, images, gitignore),
);
const vendorsTasks = gulp.series(
  fonts,
  jsDev,
  js,
  gulp.parallel(html, css, cssVendors, images, gitignore),
);

export {
  build,
  css,
  cssVendors,
  deployFTP,
  deployZIP,
  development,
  fonts,
  ftp,
  html,
  images,
  js,
  jsDev,
  reset,
  sprite,
  vendors,
  zip,
};

const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);
const vendors = gulp.series(vendorsTasks);
const deployFTP = gulp.series(buildTasks, ftp);
const deployZIP = gulp.series(buildTasks, zip);

gulp.task("default", development);
