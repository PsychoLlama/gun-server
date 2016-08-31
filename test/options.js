/* eslint-disable no-process-env*/
/* globals describe, it*/
'use strict';
var optionize = require('../src/options');
var expect = require('expect');
var Server = require('http').Server;

describe('Optionize', function () {

	it('should be a function', function () {
		expect(optionize).toBeA(Function);
	});

	it('should return an object', function () {
		var result = optionize();
		expect(result).toBeAn(Object);
	});

	it('should set `handler` to function input', function () {
		function noop () {}
		var result = optionize(noop);
		expect(result.handler).toBe(noop);
	});

	it('should set `port` to number input', function () {
		var result = optionize(4200);
		expect(result.port).toBe(4200);
	});

	it('should set the port default to PORT', function () {
		var original = process.env.PORT;
		process.env.PORT = 3000;
		var result = optionize();
		expect(result.port).toBe(3000);
		process.env.PORT = original;
	});

	it('should fall back to a default port', function () {
		var result = optionize();
		expect(result.port).toBe(8080);
	});

	it('should set `server` to Server input', function () {
		var server = new Server();
		var result = optionize(server);
		expect(result.server).toBe(server);
	});

	it('should default to a new server', function () {
		var result = optionize();
		expect(result.server).toBeA(Server);
	});

	it('should set `options` when passed options', function () {
		var options = {};
		var result = optionize({ options: options });
		expect(result.options).toBe(options);
	});

	it('should allow all options at once', function () {
		function handler () {}
		var options = {};
		var server = new Server();

		var result = optionize({
			handler: handler,
			port: 8080,
			options: options,
			server: server
		});

		expect(result.handler).toBe(handler);
		expect(result.port).toBe(8080);
		expect(result.options).toBe(options);
		expect(result.server).toBe(server);
	});

});
