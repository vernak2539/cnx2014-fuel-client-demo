'use strict';

var config   = require( './config' );
var FuelRest = require( 'fuel-rest' );
var FuelAuth = require( 'fuel-auth' );

var localAuth = {
	clientId: config.auth.clientId
	, clientSecret: config.auth.clientSecret
	, authUrl: 'https://auth-qa1s1.exacttargetapis.com/v1/requestToken'
};

var AuthClient = new FuelAuth( localAuth );
var RestClient = new FuelRest({ auth: AuthClient });

RestClient.get( { uri: '/platform/v1/endpoints' }, function( err, data ) {
	if( err ) {
		throw err;
	}

	console.log( data.body );
});
