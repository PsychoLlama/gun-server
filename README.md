# Gun-server
*Simply start a gun server*

[![Travis branch](https://img.shields.io/travis/PsychoLlama/gun-server/master.svg?style=flat-square)](https://travis-ci.org/PsychoLlama/gun-server)
[![npm](https://img.shields.io/npm/dt/gun-server.svg?style=flat-square)](https://www.npmjs.com/package/gun-server)

## Why
I write a bunch of these servers. This library takes 10 lines down to 1-2. What can I say, I'm lazy  :stuck_out_tongue_winking_eye:

## Usage
You can download it by running this in your terminal:

> If you don't have node and npm, you can get it [here](https://nodejs.org/en/download/)

```bash
$ npm install gun-server
```

It exports a function that take optional configuration and returns your gun instance.

```javascript
// import the server function
var startGunServer = require('gun-server')

// use said function
var gun = startGunServer()

// by default, it'll listen on http://localhost:8080
```

### `server([Object|Number|Function])`
By default, the server starts on port `8080`, but you can override it by passing a port number.

```javascript
var server = require('gun-server')
server(3000) // starts on port 3000
```

Or if you pass a function, it'll be attached to the server as a `request` handler.

```javascript
var server = require('gun-server')
server(function (req, res) {
	// request handler
})
```

If you pass an object, you can set the port, request handler, and gun instantiation options (or reuse an existing server).

```javascript
server({
	handler: function (request, response) {
		// request handler (optional)
	},
	port: 8080, // default, optional
	server: new http.Server(), // optional
	options: {
		// this is passed to the gun constructor

		file: 'data.json' // default
	}
})
```

## Support
If you find a bug or have a feature request, go ahead and submit an issue and I'll follow up :smiley:
