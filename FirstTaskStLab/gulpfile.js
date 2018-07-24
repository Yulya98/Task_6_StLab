var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('sass'))
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
    gulp.watch('./postcss/stylesIn.css', ['postcss']);
});

gulp.task('default', ['watch']);

var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mqpacker = require('css-mqpacker');

gulp.task('postcss', function () {
    var processor =[
        autoprefixer({browsers: ['last 2 version']}),
        cssnano(),
        mqpacker(),
    ];
    return gulp.src('./postcss/stylesIn.css')
        .pipe(postcss(processor))
        .pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./postcss/'));
});