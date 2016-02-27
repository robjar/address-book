var gulp = require('gulp'),
  del = require('del'),
  gulpLoadPlugins = require('gulp-load-plugins')
  plg = gulpLoadPlugins();
 
gulp.task('connect', function() {
  plg.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('clean:dist', function() {
  del(['dist/**', '!dist']);
});

gulp.task('clean:css', function() {
  del(['app/css/**', '!app/css']);
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(plg.connect.reload());
});

gulp.task('html:prod', function(){
  gulp.src(['app/index.html'])
    .pipe(plg.replace(/<script[\s\S]*script>/, '<script src="bundle.js"></script>'))
    .pipe(plg.replace(/css\/styles\.css/, 'styles.css'))
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
  gulp.src('app/sass/styles.scss')
    .pipe(plg.sass().on('error', plg.sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(plg.connect.reload());
});

gulp.task('sass:prod', function () {
  gulp.src('app/sass/styles.scss')
    .pipe(plg.sass({outputStyle: 'compressed'}).on('error', plg.sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['clean:dist'], plg.shell.task([
  'jspm bundle-sfx js/app dist/bundle.js --minify'
]));

gulp.task('build', ['lint', 'bundle', 'sass:prod', 'html:prod']);

gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/**/*.js'], ['lint']);
  gulp.watch('app/sass/**/*.scss', ['sass:dev']);
});
 
gulp.task('default', ['lint', 'sass:dev', 'connect', 'watch']);