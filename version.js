const gulp = require('gulp');
const bump = require('gulp-bump');
const argv = require('yargs').argv;

let bumpVersion = ' ';

if (argv.major) {
  bumpVersion = 'major';
} else if (argv.minor) {
  bumpVersion = 'minor';
} else {
  bumpVersion = 'patch';
}

gulp.task('bump', () => {
  gulp.src('./package.json')
    .pipe(bump({
      type: bumpVersion,
    }))
        .pipe(gulp.dest('./'));
});