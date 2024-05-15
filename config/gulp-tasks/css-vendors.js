import gulpSass from "gulp-sass";
import * as dartSass from "sass";
const sass = gulpSass(dartSass);

import autoPrefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import gcmq from "gulp-group-css-media-queries";

export const cssVendors = () => {
  return app.gulp
    .src(app.path.src.vendors, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      sass({
        indentWidth: 3,
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.replace(/@temp\//g, "../temp/"))
    .pipe(gcmq())
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: false,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.rename({
        extname: ".css",
      })
    )
    .pipe(app.gulp.src(`${app.path.build.css}/media.css`))
    .pipe(cleanCss({}))
    .pipe(
      app.plugins.rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css));
};
