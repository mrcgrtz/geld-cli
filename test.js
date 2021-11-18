import test from 'ava';
import {execa} from 'execa';

test('Input without flags and value', async t => {
	const error = await t.throwsAsync(() => execa('./cli.js'));
	t.is(error.exitCode, 2);
});

test('Input without flags', async t => {
	const {stdout} = await execa('./cli.js', [
		1337.42,
	]);
	t.true(stdout === '1.337,42 €');
});

test('Input with flags', async t => {
	const {stdout} = await execa('./cli.js', [
		1337.42,
		'--currency=$',
		'--currencyPosition=before',
		'--decimals=0',
		'--decimalSeparator=.',
		'--orderSeparator=,',
		'--zeroDecimals=–',
		'--space=',
	]);
	t.true(stdout === '$1,337');
});

test('Input with flag aliases', async t => {
	const {stdout} = await execa('./cli.js', [
		1337.42,
		'--c=$',
		'--cp=before',
		'--d=0',
		'--ds=.',
		'--os=,',
		'--z=–',
		'--s=',
	]);
	t.true(stdout === '$1,337');
});
