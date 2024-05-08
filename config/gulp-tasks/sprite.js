import svgSprite from 'gulp-svg-sprite';
export const sprite = () => {
  return app.gulp
    .src(`${app.path.src.sprite}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../img/icons/icons.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  { name: 'removeXMLNS', params: true },
                  { name: 'convertPathData', params: false },
                  { name: 'removeViewBox', params: false },
                  {
                    name: 'removeAttrs',
                    params: { attrs: ['fill', 'fill-rule', 'path:fill', 'path:class'] },
                  },
                ],
              },
            },
          ],
        },
        svg: {
          rootAttributes: {
            style: 'display: none;',
            'aria-hidden': true,
          },
          xmlDeclaration: false,
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.srcFolder}`));
};
