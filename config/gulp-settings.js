import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    pug: `${srcFolder}/pug/*.pug`,
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/*.scss`,
    vendors: `${srcFolder}/scss/media.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    sprite: `${srcFolder}/sprite/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
  srcFolder: srcFolder,
  ftp: ``,
};

// Настройка FTP соединения
export const configFTP = {
  host: "",
  user: "",
  password: "",
  parallel: 5,
};
