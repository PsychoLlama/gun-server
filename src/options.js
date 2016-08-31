'use strict';

var Server = require('http').Server;

/**
 * Provide defaults for config objects.
 *
 * @param  {Object|Number|Function} input - Options.
 * @returns {Object} - The correctly formatted options.
 */
function patch (input) {
	var type = typeof input;
	var opt = (input instanceof Object) ? input : {};

	// Port number.
	if (type === 'number') {
		opt.port = input;
	}

	// Request handler.
	if (type === 'function') {
		opt.handler = input;
	}

	// HTTP server.
	if (input instanceof Server) {
		opt.server = input;
	}

	// Gun constructor options.
	opt.options = (input || {}).options;

	return opt;
}

module.exports = patch;
