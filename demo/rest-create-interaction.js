'use strict';

// node client constructors
var FuelRest = require( 'fuel-rest' );
var FuelAuth = require( 'fuel-auth' );

// configs
var authConfig        = require( './config/auth' );
var interactionConfig = require( './config/interaction' );

// auth client config values
var localAuth = {
	clientId: authConfig.clientId
	, clientSecret: authConfig.clientSecret
	, authUrl: 'https://auth.exacttargetapis.com/v1/requestToken'
};

// client setup
var AuthClient = new FuelAuth( localAuth );
var RestClient = new FuelRest({ auth: AuthClient });

// request options setup
var requestOptions = {
	uri: '/interaction/v1/interactions'
	, json: interactionConfig
};

// creating interaction
RestClient.post( requestOptions, function( err, data ) {
	if( err ) {
		throw err;
	}

	console.log( data.body );
});
