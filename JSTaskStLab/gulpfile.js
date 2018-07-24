var gulp = require('gulp'),
    uglify = require('gulp-uglify-es').default;
    concat = require('gulp-concat');
    babel = require('gulp-babel');

gulp.task('firstTask', function() {
    gulp.src([
        './Scripts/BinaryOperationModule.js',
        './Scripts/CalculatorBaseTemplateModule.js',
        './Scripts/ControleValueModule.js',
        './Scripts/DataFormatterModule.js',
        './Scripts/RegistrEvent.js',
        './Scripts/SearchElemMasModule.js',
        './Scripts/SortMasModule.js',
        './Scripts/TextFormatterModule.js'
    ])
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./gulp/js/'))
});

gulp.task('secondTask', function() {
    gulp.src([
        './Scripts/ControleValueBaseTemplate.js',
        './Scripts/RegistrEvent.js',
        './Scripts/CalculatorModule.js'
    ])
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./gulp/js/')) //
});