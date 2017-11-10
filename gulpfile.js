var gulp = require('gulp');
var babel = require('gulp-babel');

/** Prod */
gulp.task('babel', function babelCompile() {
    return gulp.src(['API/src/app.js', 'API/src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./API/.tmp'));
});

gulp.task('default', ['babel']);