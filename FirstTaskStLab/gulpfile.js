var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('sass')) // Выгружаем результата в папку css
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
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

gulp.task('watch_postcss', function() {
    gulp.watch('./postcss/stylesIn.css', ['postcss']); // Наблюдение за sass файлами в папке sass
});