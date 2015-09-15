// Gulp Modules
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass')

var defaultTasks = [
    'styles',
    'watch'
];

gulp.task('styles', stylesTask);

gulp.task('watch', watchTask);

gulp.task('default', defaultTasks);

function watchTask() {
    gulp.watch('slickAnimation/**/*.scss', ['styles']);
}


function stylesTask() {
    var compileStyles = function (_baseName) {
        gulp.src(['slickAnimation/' + _baseName + '.scss'])
            .pipe(plumber())
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('slickAnimation'))
    };

    compileStyles('slick-animation');
}

