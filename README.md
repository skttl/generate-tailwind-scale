# generate-scale

A utility to generate spacing scales for TailwindCSS.

## Installation

```sh
npm install generate-tailwind-scale --save-dev
```

## Usage

In you tailwind.config.js file, you can import the package, and generate scales where you need it. Eg.

```js
const generateScale = require("generate-tailwind-scale")

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            spacing: {
                ...generateScale()
            }
        }
    }
}
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

#### Example

Given the following increment configuration:

```js
{
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


#### Default increment config

The default increment configuration is:

- `1` unit default
- `0.5` units for sizes below `5`
- `2` units for sizes above `100`
- `4` units for sizes above `200`

## Full Example

Here's a full example configuration and usage:
const generateScale = require('generate-scale');

```js
const generateScale = require("generate-tailwind-scale")

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            spacing: {
                ...generateScale(
                    classPrefix: "px",
                    classSuffix: "px",
                    unit: "px"
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
                )
            }
        }
    }
}

/*
Output:
{
  'w-px0px': '0px',
  'w-px2px': '2px',
  'w-px4px': '4px',
  'w-px6px': '6px',
  'w-px8px': '8px',
  'w-px10px': '10px',
  'w-px12px': '12px',
  'w-px14px': '14px',
  'w-px16px': '16px',
  'w-px18px': '18px',
  'w-px20px': '20px',
  'w-px25px': '25px',
  'w-px30px': '30px',
  'w-px35px': '35px',
  'w-px40px': '40px',
  'w-px45px': '45px',
  'w-px50px': '50px',
  'w-px60px': '60px',
  'w-px70px': '70px',
  'w-px80px': '80px',
  'w-px90px': '90px',
  'w-px100px': '100px'
}
*/
```

## License
MIT