'use strict';
var Gun = require('gun');
var http = require('http');
var optionize = require('./options');

function start(config) {
	var opt = optionize(config);
	var server = opt.server || new http.Server();
	if (opt.handler) {
		server.on('request', opt.handler);
	}
	var gun = new Gun(opt.options);

	server.on('request', gun.wsp.server);
	gun.wsp(server);

	server.listen(opt.port || 8080);

	return gun;
}

module.exports = start;
