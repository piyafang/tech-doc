var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  minifyCss = require('gulp-minify-css'),
  spritesmith = require('gulp.spritesmith'),
  uglify = require('gulp-uglify');

  var gutil = require("gulp-util");
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config.js");
  gulp.task("webpack", function(callback) {
      var myConfig = Object.create(webpackConfig);
      // run webpack
      webpack(
          // configuration
          myConfig
      , function(err, stats) {
          // if(err) throw new gutil.PluginError("webpack", err);
          // gutil.log("[webpack]", stats.toString({
          //     // output options
          // }));
          callback();
      });
  });
gulp.task('js', ['webpack'],function(){
  gulp.src('dest/dest.js')
    .pipe(watch('dest/dest.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dest'))
})

gulp.task('sass', function() {
  gulp.src('./style/*.sass')
    .pipe(concat('min.sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('dest'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./style/*.sass', ['sass']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/prot*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.sass'
  }));
  return spriteData.pipe(gulp.dest('dest/'));
});

gulp.task('toShareSass', function () {
  gulp.src('./style/toShare.sass', {style: 'compressed'})
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dest'));
})
gulp.task('toShareSassWatch', function () {
  gulp.watch('./style/toShare.sass', ['toShareSass'])
})

gulp.task('default', ['toShareSassWatch','sass', 'sass:watch', 'js'])
