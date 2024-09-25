import fs from "fs";
import map from "map-stream";
import fontfacegen from "fontfacegen";

export const convertFonts = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.{ttf,otf}`, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        }),
      ),
    )
    .pipe(
      map(function(file, cb) {
        fontfacegen({
          source: file.path,
          dest: `${app.path.srcFolder}/fonts/`,
        });
        cb(null, file);
      }),
    )
    .pipe(
      app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`, {
        encoding: false,
      }),
    )
    .pipe(app.gulp.dest(app.path.build.fonts));
};

export const fonstStyle = () => {
  let fontsFile = `${app.path.srcFolder}/scss/fonts/fonts.scss`;
  app.isFontsReW ? fs.unlink(fontsFile, cb) : null;
  fs.readdir(app.path.build.fonts, function(err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            if (fontWeight.toLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === "extrabold" ||
              fontWeight.toLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.ttf") format('truetype');\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb,
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log("File fonts.scss already exists!");
      }
    } else {
      fs.unlink(fontsFile, cb);
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
};
function cb() { }
