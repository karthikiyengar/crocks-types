const gulp = require('gulp')
const concat = require('gulp-concat');
const insert = require('gulp-insert');

function build() {
    return gulp.src("./templates/**/*.d.ts")
        .pipe(concat('crocks.d.ts', { newLine: '\r\n'}))
        .pipe(gulp.dest('dist'))
}


gulp.task('default', gulp.series(build))
