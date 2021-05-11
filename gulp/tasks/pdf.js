const gulp = require('gulp');

// Копируем все pdf'ки из папки dev в dist

module.exports = function pdf() {
    return gulp.src('dev/assets/pdf/*.*')
        .pipe(gulp.dest('dist/assets/pdf'))
};