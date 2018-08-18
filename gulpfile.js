'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('sass', function() {
return gulp.src('./src/styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('index.css'))
  .pipe(gulp.dest('./bundle'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/*.scss', ['sass']);
});

gulp.task('babel', () =>
	gulp.src('./src/scripts/*.js')
		.pipe(babel({
			presets: ['babel-preset-env']
    }))
    .pipe(concat('index.js'))
		.pipe(gulp.dest('./bundle'))
);

gulp.task('babel:watch', function () {
  gulp.watch('./src/scripts/*.js', ['babel']);
});

gulp.task('default', ['sass', 'babel']);
gulp.task('watch', ['sass:watch', 'babel:watch']);
