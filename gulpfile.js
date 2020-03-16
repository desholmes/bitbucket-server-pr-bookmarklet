var gulp = require("gulp");
var rename = require("gulp-rename");
var bookmarklet = require('gulp-bookmarklet');

var paths = {
  source: "./src/main.js"
};

gulp.task("build", function() {
  gulp
    .src(paths.source)
    .pipe(bookmarklet())
    .pipe(
      rename({
        basename: "bookmarklet"
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["build"]);

gulp.task("dev", ["watch"]);