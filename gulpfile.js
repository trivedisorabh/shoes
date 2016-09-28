var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	browserSync.init({
		server: './'
	});
	gulp.watch('*.html',browserSync.reload);
	gulp.watch('css/*.css',browserSync.reload);
	gulp.watch('js/*.js',browserSync.reload);

})