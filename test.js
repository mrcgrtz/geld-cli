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
	t.is(stdout, '1.337,42 €');
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
	t.is(stdout, '$1,337');
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
	t.is(stdout, '$1,337');
});

test('Input with short flags', async t => {
	const {stdout} = await execa('./cli.js', [
		1337.42,
		'-c',
		'$',
		'-p',
		'before',
		'-d',
		'0',
		'-z',
		'–',
		'-s',
		'',
	]);
	t.is(stdout, '$1.337');
});

test('Input of zero', async t => {
	const {stdout} = await execa('./cli.js', ['0']);
	t.is(stdout, '0 €');
});

test('Input of negative number', async t => {
	const {stdout} = await execa('./cli.js', ['-200000']);
	t.is(stdout, '-200.000 €');
});

test('Input with full decimal precision', async t => {
	const {stdout} = await execa('./cli.js', ['12345678901234567.89']);
	t.is(stdout, '12.345.678.901.234.567,89 €');
});
