# geld-cli

> Convert a number to a currency.

[![Test](https://github.com/Dreamseer/geld-cli/actions/workflows/test.yml/badge.svg)](https://github.com/Dreamseer/geld-cli/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/Dreamseer/geld-cli/badge.svg?branch=main)](https://coveralls.io/github/Dreamseer/geld-cli?branch=main)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![MIT license](https://img.shields.io/github/license/dreamseer/geld-cli.svg)](https://github.com/Dreamseer/geld-cli/blob/main/LICENSE.md)

## Install

Using [npm](https://www.npmjs.com/get-npm):

```bash
npm install geld-cli --global
```

## Usage

```bash
$ geld --help

  Convert a number to a currency.

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
```

```bash
$ geld 1337.42
1.337,42 €
```

## Related

* [geld](https://github.com/dreamseer/geld) is the API for this module.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
