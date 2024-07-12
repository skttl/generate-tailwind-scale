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
    // Merge config with defaults
    const {
        classPrefix,
        classSuffix,
        unit,
        scale,
        from,
        to,
        increment
    } = getConfig(config);

    // Precompute increment keys and convert them to numbers
    const belowKeys = Object.keys(increment.below || {}).map(Number);
    const aboveKeys = Object.keys(increment.above || {}).map(Number);

    // generate scale
    const spacing = {};
    let size = from;

    while (size <= to) {
        const className = `${classPrefix}${size}${classSuffix}`;
        const value = `${size / scale}${unit}`;
        spacing[className] = value;

        size = getNextSize(size, increment, belowKeys, aboveKeys);
    }
    
    return spacing;
};

const getConfig = (config) => {
    /** @type {ScaleConfig} */
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


    // Merge config with defaults
    return { ...defaultConfig, ...config };
}

const getNextSize = (currentSize, increment, belowKeys, aboveKeys) => {
    let nextSize = currentSize + (increment.default || 1);

    for (const key of belowKeys) {
        if (currentSize > key) {
            nextSize = currentSize + (increment.below[key] || increment.default || 1);
            return nextSize;
        }
    }

    for (const key of aboveKeys) {
        if (currentSize <= key) {
            nextSize = currentSize + (increment.above[key] || increment.default || 1);
            return nextSize;
        }
    }

    return nextSize;
};

module.exports = generateScale;
