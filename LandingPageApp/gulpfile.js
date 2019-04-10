const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const combineMq = require('gulp-combine-mq');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');

sass.compiler = require('node-sass');

gulp.task('clean', function () {
  return del([
    'dest/',
  ]);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('combineMq', function () {
  return gulp.src('./dest/css/*.css')
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(gulp.dest('./dest/css/'));
});

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/*.pug')
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./dest/views/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/views/**/*.pug', gulp.series('views'));
});
