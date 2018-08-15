const gulp = require('gulp')
const concat = require('gulp-concat');
const insert = require('gulp-insert');

const paths = {
    templates: {
        src: "./templates/**/*.d.ts",
        dest: "dist"
    }
}

function build() {
    return gulp.src(paths.templates.src)
        .pipe(concat('crocks.d.ts', { newLine: '\r\n'}))
        .pipe(gulp.dest(paths.templates.dest))
}

function watch() {
    return gulp.watch(paths.templates.src, build)
}

gulp.task('watch', gulp.series(watch))

gulp.task('default', gulp.series(build))
