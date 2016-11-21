var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('html', function() {
    return gulp.src('./**/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src('./css/*.css')
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('connect', function() {
    connect.server({
        port: 3001,
        livereload: true
    });
    console.log("To view app, use 'http://localhost:3001' in your browser");
});

gulp.task('watch', function() {
    gulp.watch('./partials/*.html', ['html']);
    gulp.watch('./*.html', ['html']);

    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['html', 'sass', 'css', 'watch', 'connect']);
