var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task("firstTask", function() {
    browserify({
        debug: true,
        transform:[
            [
                'babelify',
                {
                    presets: ['es2015']
                }
            ]
        ]
    })
        .require('./Scripts/Tasks_1-6(ES6).js',{ entry:true })
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest('./gulp/js/'))
});
