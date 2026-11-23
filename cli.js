#!/usr/bin/env node

import meow from 'meow';
import geld from 'geld';

/**
 * @type {import('meow').Result<Flags>}
 */
const cli = meow(`
  Usage
    $ geld <input>

  Options
    --currency, -c                Currency symbol, default: €
    --currencyPosition, --cp, -p  Currency position, default: after
    --decimals, -d                Number of decimals (precision), default: 2
    --decimalSeparator, --ds      Decimal separator, default: ,
    --orderSeparator, --os        Order separator, default: .
    --zeroDecimals, -z            Zero decimals character
    --space, -s                   Space between value and currency symbol

  Examples
    $ geld 1337.42
    1.337,42 €

    $ geld -1337.42
    -1.337,42 €
`, {
	importMeta: import.meta,
	flags: {
		currency: {
			type: 'string',
			shortFlag: 'c',
		},
		currencyPosition: {
			type: 'string',
			shortFlag: 'p',
			aliases: ['cp'],
		},
		decimals: {
			type: 'string',
			shortFlag: 'd',
		},
		decimalSeparator: {
			type: 'string',
			aliases: ['ds'],
		},
		orderSeparator: {
			type: 'string',
			aliases: ['os'],
		},
		zeroDecimals: {
			type: 'string',
			shortFlag: 'z',
		},
		space: {
			type: 'string',
			shortFlag: 's',
		},
	},
});

if (cli.input[0] === undefined) {
	cli.showHelp();
} else {
	console.log(geld(cli.input[0], cli.flags));
}
