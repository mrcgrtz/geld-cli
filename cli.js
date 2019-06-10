#!/usr/bin/env node

'use strict';

const meow = require('meow');
const geld = require('geld');

const cli = meow(`
  Usage
    $ geld <input>

  Options
    --currency, -c           Currency symbol, default: €
    --currencyPosition, -cp  Currency position, default: after
    --decimals, -d           Number of decimals (precision), default: 2
    --decimalSeparator, -ds  Decimal separator, default: ,
    --orderSeparator, -os    Order separator, default .
    --zeroDecimals, -z       Zero decimals character
    --space, -s              Space between value and currency symbol

  Example
    $ geld 1337.42
    1.337,42 €
`, {
	flags: {
		currency: {
			type: 'string',
			alias: 'c'
		},
		currencyPosition: {
			type: 'string',
			alias: 'cp'
		},
		decimals: {
			type: 'string',
			alias: 'd'
		},
		decimalSeparator: {
			type: 'string',
			alias: 'ds'
		},
		orderSeparator: {
			type: 'string',
			alias: 'os'
		},
		zeroDecimals: {
			type: 'string',
			alias: 'z'
		},
		space: {
			type: 'string',
			alias: 's'
		}
	}
});

if (cli.input[0] === undefined) {
	cli.showHelp();
} else {
	console.log(geld(cli.input[0], cli.flags));
}
