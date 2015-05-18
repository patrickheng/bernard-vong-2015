// ---------- GULPFILE BASED ON FROM Mathew78540's starter kit ----------
// ---------- Check his work : https://github.com/Mathew78540/starterkit/  ----------

var gulp 		 = require('gulp'),
	useref 		 = require('gulp-useref'),
	gulpif 		 = require('gulp-if'),
	sass 		 = require('gulp-sass'),
	uglify		 = require('gulp-uglify'),
	clean		 = require('gulp-clean'),
	imagemin 	 = require('gulp-imagemin'),
	pngquant 	 = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer'),
	argv 		 = require('yargs').argv,
	ngAnnotate 	 = require('gulp-ng-annotate'),
	livereload 	 = require('gulp-livereload'),
	serve 		 = require('gulp-serve'),
	open 		 = require('gulp-open'),
	plumber		 = require('gulp-plumber'),
	notify 		 = require('gulp-notify'),
	path 		 = {
		'dist': 'public/dist',
		'src' : 'public'
	},

	/*
	 * Use when gulp open navigator
	 *
	 * google-chrome (Linux)
	 * chrome (Windows)
	 * google chrome (OSX)
	 */
	option = {
		url: 'http://localhost:3000',
		app: 'google chrome'
	},

	/*
	 * If your project is an angularProject change it to true
	 *
	 * Use before uglify, it will add automatic fix injection dependencies
	 */
	angularProject = true,

	/*
	 * Browers compatibility for AutoPrefixer
	 */
	autoPrefixerBrowers = [
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4.0',
		'bb >= 10',
		'ie >= 10',
		'ie_mob >= 10',
		'ff >= 30'
	];

/*
 * Clean 'dist' folder
 */
gulp.task('clean', function() {
	gulp.src(path.dist, {read: false}).pipe(clean());
});

/*
 * Move images to 'dist' folder and optimise all images
 */
gulp.task('images' , function () {
	gulp.src(path.src+'/assets/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(path.dist+'public/images'));
});

/*
 * Move fonts to 'dist' folder
 */
gulp.task('fonts', function() {
	gulp.src(path.src+'/assets/fonts/**/*')
		.pipe(gulp.dest(path.dist+'public/fonts'));
})

/*
 * Compile SCSS files
 */
gulp.task('style', function () {
	gulp.src(path.src+'/assets/scss/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer(autoPrefixerBrowers))
		.pipe(gulp.dest(path.src+'/assets/css/'))
		.pipe(livereload());
});

/*
 * Create folder dist
 */
gulp.task('dist', ['clean', 'style', 'assets'], function() {

	var assets = useref.assets();

	var dist = gulp.src(path.src+'index.html').pipe(assets);

	if(angularProject) {
		dist.pipe(gulpif('*.js', ngAnnotate()));
	}

	dist.pipe(uglify())
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
		.pipe(notify("Your project is now build in dist folder."));
});

/*
 * Launch Server
 */
gulp.task('server', serve(path.src));

/*
 * Launch Chrome
 */
gulp.task('url', function(){
	gulp.src(path.src+'index.html')
		.pipe(open('', option));
});

/*
 * Watch Files
 */
gulp.task('watch', ['style'], function() {
	gulp.watch(path.src+'/assets/scss/**/*', ['style']);
});

/*
 * Default task (just gulp)
 */
gulp.task('default', ['watch', 'server', 'url'], function() {
	if(useLiveReload()) {
		livereload.listen();
	}
});

/*
 * Test if use Livereload
 */
function useLiveReload() {
	if(argv.livereload) {
		return true;
	} else {
		return false;
	}
}