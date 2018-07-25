var gulp = require("gulp");
var uglify = require("gulp-uglify-es").default;
var concat = require("gulp-concat");
var babel = require("gulp-babel");

gulp.task("firstTask", function() {
  gulp
    .src([
      "./Scripts/BinaryOperationModule.js",
      "./Scripts/CalculatorBaseTemplateModule.js",
      "./Scripts/DataFormatterModule.js",
      "./Scripts/RegistrEvent.js",
      "./Scripts/SearchElemMasModule.js",
      "./Scripts/SortMasModule.js",
      "./Scripts/TextFormatterModule.js",
      "./Scripts/ControleValueModule.js"
    ])
    .pipe(
      babel({
        presets: ["es2015"]
      })
    )
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./gulp/js/"));
});

gulp.task("secondTask", function() {
  gulp
    .src([
      "./Scripts/ControleValueBaseTemplate.js",
      "./Scripts/RegistrEvent.js",
      "./Scripts/CalculatorModule.js"
    ])
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./gulp/js/")); //
});
