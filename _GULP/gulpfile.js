var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var notify = require('gulp-notify');


// Spins up server, loads index.html (baseDir)
// Watches SASS changes and compiles sass to CSS using the sass task
// Watches HTML changes and reloads 
gulp.task('serve', ['less'], function() {
    browserSync.init({
      server: {
        baseDir: '../'
      }
    })
    // Watches SASS changes and tuns compiles sass to CSS using the sass task
    gulp.watch('../less/custom/*.less', ['less'])
    // Watches HTML changes and reloads 
    gulp.watch('../**/*.html').on('change', browserSync.reload);
});


// Compiles SASS files to CSS
// Creates sourcemaps
// Provides SASS error in terminal if there is one
// Minimizes CSS
// Streams CSS changes
// Notify of SASS task complete

gulp.task('less', function(){
    gulp.src('../less/custom/custom-bootstrap.less')
  	// .pipe(sourcemaps.init())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(less())
    .pipe(cleanCss())
    .pipe(sourcemaps.write('./css'))
    .pipe(gulp.dest('../css', {overwrite: true}))
    .pipe(browserSync.reload({stream: true}))
    .pipe(notify({ message: 'SASS task complete' }));
});




gulp.task('default', ['serve']);



