var srcDir = 'src/',
    dstDir = 'dist/',
    ghostDir = '../Ghost/content/themes/casper/';

var gulp = require( 'gulp' ),
    less = require( 'gulp-less' ),
    concat = require( 'gulp-concat' ),
    vendor = require( 'gulp-autoprefixer' );

gulp.task( 'build:less', function() {
    return gulp
            .src( srcDir + 'assets/less/main.less' )
            .pipe( less() )
            .pipe( vendor() )
            .pipe( gulp.dest( dstDir + 'assets/css/' ) );
});

gulp.task( 'build:templates', function() {
    return gulp
            .src( srcDir + 'templates/**/*.hbs' )
            .pipe( gulp.dest( dstDir ) );
});

gulp.task( 'build:fonts', function() {
    return gulp
            .src( srcDir + 'assets/fonts/**/*' )
            .pipe( gulp.dest( dstDir + 'assets/fonts/' ) );
});

gulp.task( 'build:css', [ 'build:less' ], function() {
    return gulp
            .src([
                srcDir + 'assets/css/normalize.css',
                srcDir + 'assets/css/skeleton.css',
                srcDir + 'assets/css/main.css' ])
            // .pipe( concat( 'site.css' ) )
            .pipe( gulp.dest( dstDir + 'assets/css/' ) );
});

gulp.task( 'build', [
    'build:less',
    'build:css',
    'build:templates',
    'build:fonts'
]);

gulp.task( 'apply', [ 'build' ], function() {
    return gulp
            .src( dstDir + '**/*' )
            .pipe( gulp.dest( ghostDir ) );
});

gulp.task( 'watch', function() {
    return gulp.watch( srcDir + '**/*.*', [ 'apply' ]);
});

gulp.task( 'default', ['watch'] );