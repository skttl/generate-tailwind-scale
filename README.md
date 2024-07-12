# generate-scale

A utility to generate spacing scales for TailwindCSS.

## Installation

```sh
npm install generate-tailwind-scale
```

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

- `classPrefix` (string, optional): Prefix to be added to the class names, *default ""*
- `classSuffix` (string, optional): Suffix to be added to the class names, *default ""*
- `unit` (string, optional): Unit of measurement for the CSS values, *default "rem"*
- `scale` (number, optional): The scale factor from the class name to the CSS value, *default 4*
- `from` (number, optional): The starting value of the scale, *default 0*
- `to` (number, optional): The ending value of the scale, *default 256*
- `increment` (object, optional): Increment configuration, *see defaults below*

### Increment Configuration

The increment configuration object allows you to define how the scale should increment based on the size value. It consists of three parts:

- `default`: The default increment value used when no specific conditions are met, *default 1*
- `below`: An object where keys are size thresholds, and values are the increment values to be used for sizes below these thresholds.
- `above`: An object where keys are size thresholds, and values are the increment values to be used for sizes above these thresholds.

**Example**

Given the following increment configuration:

```js
const increment = {
  default: 5,
  below: {
    20: 2
  },
  above: {
    50: 10
  }
};
```

The function will increment the size by:

- `2` units for sizes below `20`.
- `10` units for sizes above `50`.
- `5` units for sizes between `20` and `50`.

**Default increment config**

The default increment configuration is:

- `1` unit default
- `0.5` units for sizes below `5`
- `2` units for sizes above `100`
- `4` units for sizes above `200`

## Full Example

Here's a full example configuration and usage:
const generateScale = require('generate-scale');

```js
const config = {
  classPrefix: "p-",
  classSuffix: "",
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

/*
Output:
{
  'p-0': '0px',
  'p-2': '2px',
  'p-4': '4px',
  'p-6': '6px',
  'p-8': '8px',
  'p-10': '10px',
  'p-12': '12px',
  'p-14': '14px',
  'p-16': '16px',
  'p-18': '18px',
  'p-20': '20px',
  'p-25': '25px',
  'p-30': '30px',
  'p-35': '35px',
  'p-40': '40px',
  'p-45': '45px',
  'p-50': '50px',
  'p-60': '60px',
  'p-70': '70px',
  'p-80': '80px',
  'p-90': '90px',
  'p-100': '100px'
}
*/
```

## License
MIT