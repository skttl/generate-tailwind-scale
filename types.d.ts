/**
 * Generates a scale based on the given configuration.
 *
 * @param {ScaleConfig} config - The configuration for generating the scale.
 * @returns {Object<string, string>} The generated scale.
 */
export function generateScale(config: ScaleConfig): { [key: string]: string };

/**
 * Scale configuration for the scale generator.
 * 
 * @property {string} [classPrefix=""] - Prefix to be added to the class names.
 * @property {string} [classSuffix] - Suffix to be added to the class names.
 * @property {string} [unit] - Unit of measurement.
 * @property {number} [scale] - The scale factor.
 * @property {number} [from] - The starting value of the scale.
 * @property {number} [to] - The ending value of the scale.
 * @property {IncrementConfig} [increment] - Increment configuration.
 */
export type ScaleConfig = {
    /**
     * Prefix to be added to the class names.
     * @default ""
     */
    classPrefix?: string,

    /**
     * Suffix to be added to the class names.
     * @default ""
     */
    classSuffix?: string,

    /**
     * Unit of measurement.
     * @default "rem"
     */
    unit?: string,

    /**
     * The scale factor.
     * @default 4
     */
    scale?: number,

    /**
     * The starting value of the scale.
     * @default 0
     */
    from?: number,

    /**
     * The ending value of the scale.
     * @default 256
     */
    to?: number,

    /**
     * Increment configuration.
     * @default { default: 1, below: { 5: 0.5 }, above: { 100: 2, 200: 4 } }
     */
    increment?: IncrementConfig
};

/**
 * Increment configuration for the scale generator.
 * 
 * @property {number} default - The default increment value.
 * @property {Object<number, number>} [below] - Increment values for sizes below certain thresholds.
 * @property {Object<number, number>} [above] - Increment values for sizes above certain thresholds.
 */
export type IncrementConfig = {
    /**
     * The default increment value.
     */
    default: number,

    /**
     * Increment values for sizes below certain thresholds.
     */
    below?: {
        [key: number]: number
    },

    /**
     * Increment values for sizes above certain thresholds.
     */
    above?: {
        [key: number]: number
    }
};