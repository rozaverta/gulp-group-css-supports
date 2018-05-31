'use strict';

var through = require('through2');
var gcs = require('group-css-supports');

module.exports = function () {
	return through.obj(function (file, enc, cb) {

		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			throw new Error('gulp-group-css-supports: Streaming not supported');
		}

		file.contents = new Buffer(gcs(file.contents.toString()));

		this.push(file);
		cb();
	});
};
