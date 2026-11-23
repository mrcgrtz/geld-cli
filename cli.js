#!/usr/bin/env node

import process from 'node:process';
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
    --currencyPosition, --cp, -p  Currency position (before or after), default: after
    --decimals, -d                Number of decimals (0 to 100), default: 2
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
			type: 'number',
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

function fail(message) {
	console.error(message);
	process.exit(2);
}

const [input] = cli.input;
const {currencyPosition, decimals} = cli.flags;

if (input === undefined) {
	cli.showHelp();
}

if (currencyPosition !== undefined && !['before', 'after'].includes(currencyPosition)) {
	fail(`Invalid currency position: ${currencyPosition}. Use before or after.`);
}

if (decimals !== undefined && !(Number.isSafeInteger(decimals) && decimals >= 0 && decimals <= 100)) {
	fail('Invalid number of decimals. Use an integer from 0 to 100.');
}

const output = geld(input, cli.flags);

if (output === '') {
	fail(`Invalid number: ${input}`);
}

console.log(output);
