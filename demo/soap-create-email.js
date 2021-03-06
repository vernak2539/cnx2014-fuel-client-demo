'use strict';

// node client constructors
var FuelSoap = require( 'fuel-soap' );
var FuelAuth = require( 'fuel-auth' );

// configs
var authConfig = require( './config/auth' );

// auth client config values
var localAuth = {
	clientId: authConfig.clientId
	, clientSecret: authConfig.clientSecret
	, authUrl: 'https://auth.exacttargetapis.com/v1/requestToken'
};

// client setup
var AuthClient = new FuelAuth( localAuth );
var SoapClient = new FuelSoap({
	auth: AuthClient
	, soapEndpoint: 'https://webservice.s7.exacttarget.com/Service.asmx'
});

// create Email JSON Object
var EmailObj = {
	Name: 'SOAP Created Email with Node'
	, Description: 'An email created using the Fuel Soap Client Library'
	, HTMLBody: '<h1>Hey there, I heard you like node, so I put SOAP in it.</h1>' // Could get fancier
	, Subject: 'Hello %%full_name%%, Welcome to CNX 2014'
	, EmailType: 'HTML'
	, IsHTMLPaste: true
};

// creating Email
SoapClient.create(
	'Email'
	, EmailObj
	, function( err, res ) {
		if (err) {
			throw err;
		}

		console.log(res);
	}
);
