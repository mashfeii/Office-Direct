export const resources = () => {
  return app.gulp.src(app.path.src.resources).pipe(app.gulp.dest(app.path.buildFolder));
};
