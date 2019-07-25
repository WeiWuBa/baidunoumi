var gulp =require('gulp');
var concat =require('gulp-concat');
gulp.task('concat',function(){
	gulp.src('./dist/css/*.css')
	.pipe(concat("yMovieAll.css"))
	.pipe(gulp.dest("./dist/css"));
})
