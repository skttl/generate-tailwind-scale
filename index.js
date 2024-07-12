/**
 * @typedef {import('./types').IncrementConfig} IncrementConfig
 * @typedef {import('./types').ScaleConfig} ScaleConfig
 */

/**
 * Generates a scale based on the given configuration.
 *
 * @param {ScaleConfig} config - The configuration for generating the scale.
 * @returns {Object<string, string>} The generated scale.
 */
const generateScale = (config) => {
    const defaultConfig = {
        classPrefix: "",
        classSuffix: "",
        unit: "rem",
        scale: 4,
        from: 0,
        to: 256,
        increment: {
            default: 1,
            below: {
                5: 0.5,
            },
            above: {
                100: 2,
                200: 4,
            }
        }
    };

    // merge config
    const {
        classPrefix = defaultConfig.classPrefix,
        classSuffix = defaultConfig.classSuffix,
        unit = defaultConfig.unit,
        scale = defaultConfig.scale,
        from = defaultConfig.from,
        to = defaultConfig.to,
        increment = defaultConfig.increment
    } = config || {};

    // generate scale
    const spacing = {};
    let size = from;
    while (size <= to) {
        spacing[`${classPrefix}${size}${classSuffix}`] = `${size / scale}${unit}`;

        // increment size
        let matchingBelowIncrement = Object.keys(increment.below || {}).find((key) => size > parseInt(key, 10));
        if (matchingBelowIncrement) {
            size += increment.below[matchingBelowIncrement];
            continue;
        }

        let matchingAboveIncrement = Object.keys(increment.above || {}).find((key) => size <= parseInt(key, 10));
        if (matchingAboveIncrement) {
            size += increment.above[matchingAboveIncrement];
            continue;
        }

        size += increment.default || 1;
    }
    return spacing;
};

module.exports = generateScale;
