import htmlmin from "gulp-htmlmin";
import typograf from "gulp-typograf";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
  return (
    app.gulp
      .src(`${app.path.build.html}*.html`)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(
        typograf({
          locale: ["ru", "en-US"],
          htmlEntity: "name",
        })
      )
      // .pipe(webpHtmlNosvg())
      .pipe(
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js", "img"],
          },
          output: {
            file: "config/version.json",
          },
        })
      )
      // .pipe(
      //   app.plugins.if(
      //     app.isBuild,
      //     htmlmin({
      //       removeComments: true,
      //       collapseWhitespace: true,
      //       minifyCSS: true,
      //     })
      //   )
      // )
      .pipe(app.gulp.dest(app.path.build.html))
  );
};
