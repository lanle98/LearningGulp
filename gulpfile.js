const gulp = require("gulp");
const sass = require("gulp-sass");

//define some common tasks for Gulp to run

//like compile and minify SASS files:
function compile(done) {
  gulp
    .src("./sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
  done();
}

exports.compile = compile;
