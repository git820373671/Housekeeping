/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),
  less = require('gulp-less'),
//确保本地已安装gulp-minify-css [npm install gulp-minify-css --save-dev]
  cssMin = require('gulp-minify-css');

//createdCss（自定义任务名称）
gulp.task('createdCss', function () {
  gulp.src('src/assets/css/style.less') //该任务针对的文件
    .pipe(less()) //该任务调用的模块
    .pipe(cssMin())
    .pipe(gulp.dest('src/assets/css')); //将会在src/css下生成index.css
});

gulp.task('autoCss', function () {
  gulp.watch('src/assets/css/*.less', ['createdCss'])
});

gulp.task('default', ['createdCss', 'autoCss']);
