var gulp = require('gulp'),
  del = require('del'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  cssImporter = require('node-sass-css-importer')({
    import_paths: ['app/jspm_packages']
  }),
  plg = gulpLoadPlugins();

gulp.task('connect', function () {
  plg.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('clean:dist', function () {
  del(['dist']);
});

gulp.task('clean:css', function () {
  del(['app/css/**', '!app/css']);
});

gulp.task('html', function () {
  gulp.src('app/**/*.html')
    .pipe(plg.connect.reload());
});

gulp.task('partials:prod', function () {
  gulp.src('app/partials/*.html')
    .pipe(gulp.dest('dist/partials'));
});

gulp.task('html:prod', function () {
  gulp.src(['app/index.html'])
    .pipe(plg.replace(/<script[\s\S]*script>/, '<script src="bundle.js"></script>'))
    .pipe(plg.replace(/css\/main\.css/, 'main.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
  gulp.src('app/js/**/*.js')
    .pipe(plg.eslint())
    .pipe(plg.eslint.format())
    //.pipe(plg.eslint.failAfterError())
    .pipe(plg.connect.reload());
});

gulp.task('sass:dev', ['clean:css'], function () {
  gulp.src('app/sass/main.scss')
    .pipe(plg.sass({
      importer: [cssImporter]
    }).on('error', plg.sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(plg.connect.reload());
});

gulp.task('sass:prod', function () {
  gulp.src('app/sass/main.scss')
    .pipe(plg.sass({
      importer: [cssImporter],
      outputStyle: 'compressed'
    }).on('error', plg.sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['clean:dist'], plg.shell.task([
  'jspm bundle-sfx js/app dist/bundle.js --minify'
]));

gulp.task('build', ['lint', 'bundle'], function() {
  gulp.start('sass:prod');
  gulp.start('html:prod');
  gulp.start('partials:prod');
});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.html'], ['html']);
  gulp.watch(['app/**/*.js'], ['lint']);
  gulp.watch('app/sass/**/*.scss', ['sass:dev']);
});

gulp.task('default', ['lint', 'sass:dev', 'connect', 'watch']);