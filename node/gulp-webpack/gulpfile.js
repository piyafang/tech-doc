// gulpfile

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var reload = browserSync.reload;

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
gulp.task('webpacktask', function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
      callback();
    });
});


//base  替换文件路径   或者dest cwd：‘指定当前文件父级目录’
gulp.task('js',['webpacktask'],function(){
  return gulp.src('./dist/script/*.js')
    // .pipe($.concat('dest.js'))
    //.pipe($.browserify())
    // .pipe($.sourcemaps.init())
    // .pipe($.jshint())
    // .pipe($.jshint.reporter())
    .pipe($.uglify())
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream: true}))
});

// sass编译后的css将注入到浏览器里实现更新
gulp.task('sass',function(){
  return gulp.src('./src/style/*.sass',{base:'src'})
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    // .pipe($.rubySass(sourcemap: true))
    // .pipe($.sourcemaps())
    .pipe(gulp.dest('dist/'))
    .pipe($.minifyCss())
    // .pipe($.rename('*.min.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/'))
    .pipe($.filter('*.css'))
    .pipe(reload({stream: true}))
});


gulp.task('img',function(){
  return gulp.src('./src/img/*.{jpg,png}',{base:'src'})
    .pipe($.imagemin())
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream: true}))
})

gulp.task('html',function(){
     return gulp.src('./src/**/*.html')
         .pipe(gulp.dest('dist/'))
         .pipe(reload({stream: true}))

});


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve',['html','sass','js','img'],function(){
  browserSync({
    notify: false,
    port: 8090,
    server: {
      baseDir: ['dist']
    }
  });
  gulp.watch(['./src/**/*']).on('change',reload);
  gulp.watch('./src/view/*.html',['html']);
  gulp.watch('./src/style*/*.sass',['sass']);
  gulp.watch('./src/img/*.png',['img']);
  gulp.watch('./src/script/*.js',['js']);

})

gulp.task('default',['serve']);
