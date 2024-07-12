/**
 * Increment configuration for the scale generator.
 * @typedef {Object} IncrementConfig
 * @property {number} default - The default increment value.
 * @property {Object<number, number>} [below] - Increment values for sizes below certain thresholds.
 * @property {Object<number, number>} [above] - Increment values for sizes above certain thresholds.
 */

/**
 * Scale configuration for the scale generator.
 * @typedef {Object} ScaleConfig
 * @property {string} [classPrefix] - Prefix to be added to the class names.
 * @property {string} [classSuffix] - Suffix to be added to the class names.
 * @property {string} [unit] - Unit of measurement.
 * @property {number} [scale] - The scale factor.
 * @property {number} [from] - The starting value of the scale.
 * @property {number} [to] - The ending value of the scale.
 * @property {IncrementConfig} [increment] - Increment configuration.
 */

/**
 * Generates a scale based on the given configuration.
 *
 * @param {ScaleConfig} config - The configuration for generating the scale.
 * @returns {Object<string, string>} The generated scale.
 */
export function generateScale(config: ScaleConfig): { [key: string]: string };

export type ScaleConfig = ScaleConfig;
export type IncrementConfig = IncrementConfig;