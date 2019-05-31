# geld-cli

> Convert a number to a currency.

[![Build Status](https://travis-ci.org/Dreamseer/geld-cli.svg?branch=master)](https://travis-ci.org/Dreamseer/geld-cli) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Greenkeeper badge](https://badges.greenkeeper.io/Dreamseer/geld-cli.svg)](https://greenkeeper.io/)

## Install

Using [npm](https://www.npmjs.com/get-npm):

```
$ npm install geld-cli --global
```

Using [yarn](https://yarnpkg.com/):

```
$ yarn global add geld-cli
```

## Usage

```
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

```
$ geld 1337.42
1.337,42 €
```

## Related

* [geld](https://github.com/dreamseer/geld) is the API for this module.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
