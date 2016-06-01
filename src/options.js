'use strict';

var Server = require('http').Server;

function patch (opt) {
	var type = typeof opt;
	if (type === 'number') {
		opt = {
			port: opt
		};
	}
	if (type === 'function') {
		opt = {
			handler: type
		};
	}
	if (opt instanceof Server) {
		opt = {
			server: opt
		};
	}
	if (!(opt instanceof Object)) {
		opt = {};
	}
	opt.options = opt.options || {};
	return opt;
}

module.exports = patch;
