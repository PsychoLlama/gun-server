/* eslint-disable no-process-env*/
'use strict';

var Server = require('http').Server;

/**
 * Provide defaults for config objects.
 *
 * @param  {Object|Number|Function} input - Options.
 * @returns {Object} - The correctly formatted options.
 */
function patch (input) {

	/** Get the input type. */
	var type = typeof input;

	/** Get an options object. */
	var opt = (input instanceof Object) ? input : {};

	/** Get a default port number. */
	var port = parseInt(process.env.PORT, 10) || 8080;

	/** Resolve to a port number. */
	opt.port = (type === 'number') ? input : port;

	/** Accept request handlers. */
	if (type === 'function') {
		opt.handler = input;
	}

	/** Accept http.Servers. */
	if (input instanceof Server) {
		opt.server = input;
	}

	/** Create a new server if one doesn't exist. */
	opt.server = opt.server || new Server();

	/** Accept Gun constructor options. */
	opt.options = (input || {}).options;

	return opt;
}

module.exports = patch;
