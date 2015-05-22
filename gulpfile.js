(function () {

	'use strict';

	var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		jshint = require('gulp-jshint'),
		concat = require('gulp-concat'),
		rev = require('gulp-rev'),
		usemin = require('gulp-usemin'),
		livereload = require('gulp-livereload');

	gulp.task('minify', function () {
		gulp.src('src/index.html')
			.pipe(usemin({
				css: [uglify(), rev()],
				js: [uglify(), rev()],
				app: [uglify(), rev()]
			}))
			.pipe(gulp.dest('build'))
			.pipe(livereload());
	});


})();