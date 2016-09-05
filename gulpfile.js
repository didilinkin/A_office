var gulp = require('gulp'), 						// gulp
	util = require('gulp-util'), 					// gulp常用的工具库——gulp-util
	// 压缩任务
	htmlmin = require('gulp-htmlmin'),				// HTML压缩——gulp-htmlmin
	// CSS预处理任务
	sass = require('gulp-sass'), 					// sass编译——gulp-sass
	autoprefixer = require('gulp-autoprefixer'),	// 给css添加浏览器前缀——gulp-autoprefixer
	sourcemaps = require('gulp-sourcemaps'),		// gulp-sourcemaps原始地址
	// 特殊任务
	livereload = require('gulp-livereload'),		// 自动刷新——gulp-livereload
	watchPath = require('gulp-watch-path'),		    // watch监控——gulp-watch-path
    connect = require('gulp-connect');				// gulp 服务器插件

    // Sass编译任务
	gulp.task('sass', function () {
		return gulp.src('./src/sass/*.sass')
			// 输出格式 + 错误输出
			.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
			// 输出位置
			.pipe(gulp.dest('./src/css'))
			// 添加LiveReload插件
			livereload.listen();
	});

    //Gulp sever服务器
	gulp.task('connect', function () {
	  return connect.server({
	    root: 'src/'
	  });
	});

    

