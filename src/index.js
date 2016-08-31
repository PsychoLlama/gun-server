'use strict';
var Gun = require('gun');
var optionize = require('./options');

/**
 * Start a simple gunDB server.
 *
 * @param  {Object|Number|Function} [options] - Server options.
 * @param  {Object} [options.port] - The server port number.
 * @param  {Object} [options.handler] - A request handler.
 * @param  {Object} [options.options] - Gun constructor arguments.
 * @param  {Object} [options.server] - An `http.Server` instance.
 * @returns {Gun} - A new gun instance.
 */
function start (options) {

	/** Set default options. */
	var opt = optionize(options);

	var server = opt.server;

	/** Add the request handler. */
	if (opt.handler) {
		server.on('request', opt.handler);
	}

	/** Create a gun instance, passing the options. */
	var gun = new Gun(opt.options);

	/** Add the /gun.js route server. */
	server.on('request', gun.wsp.server);

	/** Handle sockets on the /gun route. */
	gun.wsp(server);

	/** Start the server. */
	server.listen(opt.port);

	return gun;
}

module.exports = start;
