'use strict';

//
// modules
const 
	gulp     = require('gulp'),
	rename   = require('gulp-rename'), 
	cleanCSS = require('gulp-clean-css'), 
	babel    = require("gulp-babel"),
	uglify   = require('gulp-uglify');
	

//
// functions
//

// css min
function cssmin(){
	return (
		gulp.src("htm/css/style.css")
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest("htm/css/"))
	);		
};
exports.cssmin = cssmin;


// scripts [babel + min]
function scripts(){
	return (
		gulp.src("htm/js/proj.js")
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(rename('proj.babel.js'))
		.pipe(gulp.dest("htm/js/"))
		.pipe(uglify())
		.pipe(rename('proj.min.js'))
		.pipe(gulp.dest("htm/js/"))
	);		
};
exports.scripts = scripts;



//
// dev process
//
var dev = gulp.series(
	cssmin,
	scripts
);



//
// tasks 
//
gulp.task('default', dev);
