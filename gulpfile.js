//require相当于nodejs中用到的require
var gulp = require("gulp"), // 引入 gulp 模块
	minifycss = require("gulp-clean-css"), // 引入 gulp-clean-css 模块
	minifyjs = require("gulp-uglify"), // 引入 gulp-gulify 模块
	minifyhtml = require("gulp-htmlmin"),
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload");

// 定义压缩CSS任务
gulp.task("css", function(){
	gulp.src("css/*.css")
		.pipe(minifycss())
		.pipe(gulp.dest("dist/css"));
});

// 定义压缩JS任务
gulp.task("js", function(){
	gulp.src("js/*.js")
		.pipe(minifyjs())
		.pipe(gulp.dest("dist/js"));
});

// 定义压缩HTML任务
gulp.task("html", function(){
	gulp.src("*.html")
		.pipe(minifyhtml({
				collapseWhitespace: true,
				minifyCSS:true,
				minifyJS:true
			}))
		.pipe(gulp.dest("dist/html"));
});

// 定义编译SASS任务
gulp.task("sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("dist/sass"))
		.pipe(livereload()); // 浏览器刷新
});

// 定义监视任务
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('sass/*.scss', ["sass"]);
});

gulp.task("default", ["css", "js", "html", "sass", "watch"]);