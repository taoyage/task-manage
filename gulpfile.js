/*
 * @Author: accord
 * @Date:   2016-11-11 20:49:08
 * @Last Modified by:   taoyage        
 * @Last Modified time: 2016-11-28 16:25:59        
 */

'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const watch = require('gulp-watch');
const babel = require('gulp-babel');

const path = {
    vendor: [
        './client/vendor/angular/angular.min.js',
        './client/vendor/angular-ui-router/release/angular-ui-router.min.js'
    ],
    js: 'client/app/**/*.js'
}

const dest_path = {
    js: './client/js'
}

/*
 |--------------------------------------------------------------------------
 | 合并前端框架
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', () => {
    return gulp.src(path.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dest_path.js))
        .pipe(livereload());
});

/*
 |--------------------------------------------------------------------------
 | 编译es6,合并代码
 |--------------------------------------------------------------------------
 */

gulp.task('bundle', () => {
    return gulp.src(path.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest_path.js))
        .pipe(livereload());
});

/*
 |--------------------------------------------------------------------------
 | 监控
 |--------------------------------------------------------------------------
 */
gulp.task('watch', () => {
	watch(path.js,() => {
		gulp.start('bundle');
	});
});

gulp.task('default', ['watch', 'vendor','bundle']);
