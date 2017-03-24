const gulp = require('gulp');
const util = require('./util-tool');

// Bump the version included in bower.json and package.json
gulp.task('bump-version', () => {
  gulp.src(['./package.json'])
  .pipe(util.bump({ typeofIncrement: 'patch' }))
  .pipe(gulp.dest('./'));
});
