# gulp-group-css-supports

[NPM v1.0](https://www.npmjs.com/package/gulp-group-css-supports)

> CSS postprocessing: group supports content. Useful for postprocessing preprocessed CSS files.

This plugin is a wrapper for the [group-css-supports](https://github.com/rozaverta/group-css-supports) plugin.

## Install

```bash
$ npm install --save-dev gulp-group-css-supports
```

## Usage

```js
var gulp = require('gulp');
var cssSupports = require('gulp-group-css-supports');

gulp.task('default', function () {
	gulp.src('src/style.css')
		.pipe(cssSupports())
		.pipe(gulp.dest('dist'));
});
```

## License

[MIT](http://opensource.org/licenses/MIT) © [GoshaV](https://github.com/rozaverta)
