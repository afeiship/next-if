# next-if
> If condition for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-if
```

## usage
```js
import '@jswork/next-if';

const obj1 = { name: 'fei' };
const res1 = nx.if(obj1.name === 'fei', 'yes', 'no');

// yes
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-if/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-if
[version-url]: https://npmjs.org/package/@jswork/next-if

[license-image]: https://img.shields.io/npm/l/@jswork/next-if
[license-url]: https://github.com/afeiship/next-if/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-if
[size-url]: https://github.com/afeiship/next-if/blob/master/dist/next-if.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-if
[download-url]: https://www.npmjs.com/package/@jswork/next-if
