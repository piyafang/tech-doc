// gulpfile

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var reload = browserSync.reload;

//base  替换文件路径   或者dest cwd：‘指定当前文件父级目录’
gulp.task('js',function(){
  return gulp.src('./src/script/*.js',{base:'src'})
    .pipe($.concat('main.js'))
     .pipe($.uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass',function(){
  return gulp.src('./src/style/*.sass',{base:'src'})
    .pipe($.plumber())
    .pipe($.sass())
    .pipe(gulp.dest('dist/'))
    .pipe($.minifyCss())
    .pipe($.rename('*.min.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('img',function(){
  return gulp.src('./src/img/**/*.{jpg,png}',{base:'src'})
    .pipe($.imagemin())
    .pipe(gulp.dest('dist/'))
})

gulp.task('html',function(){
     return gulp.src('./src/**/*.html')
         .pipe(gulp.dest('dist/'))
});

gulp.task('watch',function(){
  gulp.watch('./src/**/*',['js','sass','html']).on('change',reload);
});

gulp.task('server',['html','sass','js'],function(){
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });


// gulp.task('watch',function(){
//   gulp.watch('./src/**/*',['js','sass','html']).on('change',$.connect.reload)
// });

// gulp.task('html',function(){
//      return gulp.src('./src/**/*.html')
//          .pipe(gulp.dest('dist/'))
//          .pipe($.connect.reload());
// });
// //
// gulp.task('server',function(){
//     $.connect.server({
//         root:'dist',//服务器的根目录
//         port:8080, //服务器的地址，没有此配置项默认也是 8080
//         livereload:true//启用实时刷新的功能
//     });
// });
//运行此任务的时候会在8080上启动服务器，

gulp.task('default',['html','js','sass','watch','server']);
