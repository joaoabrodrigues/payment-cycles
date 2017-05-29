const gulp = require('gulp')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', function(){
  gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
})

gulp.task('app.css', function(){

})

gulp.task('app.js', function(){

})

gulp.task('app.assets', function(){

})
