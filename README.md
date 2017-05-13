Viginere
=========

An implementation of the Viginere Cipher, providing utility methods to `encrypt` and `decrypt` text, using a supplied keyword in order to remove the chance of the cipher being broken by frequency analysis.

## Installation

```shell
  npm install viginere --save
```

## Usage

```js
  var viggy = require('viginere')
  var plaintext = "secret you want to hide",
  var key = "cicero"

  var ciphertext = viggy.encrypt(key, plaintext);

```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0
