'use strict';

var gulp   = require( 'gulp' );
var jshint = require( 'gulp-jshint' );

gulp.task( 'tests', function() {
	return gulp.src([ './*.js', './auth/*.js' ])
		.pipe( jshint() )
		.pipe( jshint.reporter( 'jshint-stylish' ) );
});
