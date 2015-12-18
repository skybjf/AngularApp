/*!
 * gulp
 * $ npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');
// Styles
gulp.task('styles', function() {
    return gulp.src('app/dev/css/*.scss')
        .pipe(sass())
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        // .pipe(gulp.dest('app/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/css'))
        .pipe(notify({message: 'Styles task complete'}));
});
// Scripts
gulp.task('scripts', function() {
    return gulp.src('app/dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(concat('all.js'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(notify({message: 'Scripts task complete'}));
});
// Images
gulp.task('images', function() {
    return gulp.src('app/dev/img/**/*')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('app/img'))
        .pipe(notify({message: 'Images task complete'}));
});
// Default task
gulp.task('default', function() {
    // gulp.start('styles', 'scripts', 'images');
    // gulp.start('styles', 'images');
    gulp.start('images');
});
// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('app/dev/css/*.scss', ['styles']);
    // Watch .js files
    gulp.watch('app/dev/js/*.js', ['scripts']);
    // Watch image files
    gulp.watch('app/dev/img/**/*', ['images']);
    // Create LiveReload server
    livereload.listen();
    // Watch any files in assets/, reload on change
    gulp.watch('*').on('change', livereload.changed);
    gulp.watch(['app/css/*.css', 'app/js/*.js', 'app/img/*']).on('change', livereload.changed);
});
