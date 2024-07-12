# generate-scale

A utility to generate spacing scales for CSS frameworks.

## Installation

```sh
npm install generate-scale

## Usage
```js
const generateScale = require('generate-scale');

const config = {
  classPrefix: "p-",
  unit: "px",
  scale: 1,
  from: 0,
  to: 100,
  increment: {
    default: 5,
    below: {
      20: 2
    },
    above: {
      50: 10
    }
  }
};

const scale = generateScale(config);
console.log(scale);
```

## Configuration
The generateScale function accepts a configuration object with the following properties:

- `classPrefix` (string, optional): Prefix to be added to the class names, default "".
- `classSuffix` (string, optional): Suffix to be added to the class names, default "".
- `unit` (string, optional): Unit of measurement for the CSS values, default "rem".
- `scale` (number, optional): The scale factor from the class name to the CSS value, default 4.
- `from` (number, optional): The starting value of the scale, default 0.
- `to` (number, optional): The ending value of the scale, default 256.
- `increment` (object, optional): Increment configuration, defaults to increments of 1, below 5 it increments by 0.5, above 100 it increments by 2, and above 200 it increments by 4.

## License
MIT