var gulp = require('gulp');
var sass = require('gulp-sass');

function style() {
    return(gulp.src(paths.styles.src)
           .pipe(sass())
           .on("error", sass.logError)
           .pipe(postcss([autoprefixer(), cssnano()]))
           .pipe(concat('style.min.css'))
           .pipe(gulp.dest(paths.styles.dest)));
           
}

var paths = {
    styles: {
        src: "app/scss/*.scss",
        dest: "app/css/"
    }
};

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var concat = require('gulp-concat');

function watch() {
    gulp.watch(paths.styles.src, style)
}

function javascript() {
    return(gulp.src(paths.js.src)
          .pipe(uglify())
          .pipe(concat('main.min.js'))
          .pipe(gulp.dest(paths.js.dest)));
}

exports.javascript = javascript;
exports.default = gulp.series(style, javascript);