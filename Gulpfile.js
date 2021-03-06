var srcDir = 'src/',
    dstDir = 'dist/',
    ghostDir = '../Ghost/content/themes/casper/';

var gulp    = require( 'gulp' ),
    less    = require( 'gulp-less' ),
    jshint  = require( 'gulp-jshint' ),
    plumber = require( 'gulp-plumber' ),
    stylish = require( 'jshint-stylish' ),
    del     = require( 'del' ),
    concat  = require( 'gulp-concat' ),
    vendor  = require( 'gulp-autoprefixer' );

gulp.task( 'check:js', function() {
    return gulp
            .src( srcDir + 'assets/js/**/*.js' )
            .pipe( jshint() )
            .pipe( jshint.reporter( stylish ) );
});

gulp.task( 'build:less', function() {
    return gulp
            .src( srcDir + 'assets/less/main.less' )
            .pipe( plumber() )
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

gulp.task( 'build:js', [ 'check:js' ], function() {
    return gulp
            .src( srcDir + 'assets/js/**/*.js' )
            .pipe( concat( 'site.js' ) )
            .pipe( gulp.dest( dstDir + 'assets/js/' ) );
});

gulp.task( 'build', [
    'build:less',
    'build:css',
    'build:templates',
    'build:fonts',
    'build:js'
]);

gulp.task( 'delete:ghost', function( done ) {
    return del( '../Ghost/content/themes/casper/*', {
        force: true
    }, done );
});

gulp.task( 'apply', [ 'build', 'delete:ghost' ], function() {
    return gulp
            .src( dstDir + '**/*' )
            .pipe( gulp.dest( ghostDir ) );
});

gulp.task( 'watch', function() {
    return gulp.watch( srcDir + '**/*.*', [ 'apply' ])
            .on('error', console.log.bind(console));
});

gulp.task( 'default', ['watch'] );