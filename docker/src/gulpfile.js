'use strict'

const gulp = require('gulp'),
      browserify = require("browserify"),
      source = require('vinyl-source-stream'),
      tsify = require("tsify"),
      watchify = require("watchify"),
      gutil = require("gulp-util"),
      uglify = require("gulp-uglify"),
      sourcemaps = require("gulp-sourcemaps"),
      buffer = require("vinyl-buffer"),
      paths = {
        pages: [ '*.html' ]
      }

let watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: [ 'app/main.ts' ],
  cache: {},
  packageCache: {}
}).plugin(tsify))

gulp.task('copy-html', function() {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'))
})

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
}

gulp.task("default", ["copy-html"], bundle)
watchedBrowserify.on('update', bundle)
watchedBrowserify.on('log', gutil.log)
