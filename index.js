'use strict';

exports.register = (server, options, next) => {
	const Camo = require('camo');
	server.expose('camo',Camo);

	if(options.uri) {
		var connectCallback = options.connectCallback || null;

		Camo.connect(options.uri).then(connectCallback);
	}

	return next();
};

exports.register.attributes = {
	pkg: require('./package.json')
};
