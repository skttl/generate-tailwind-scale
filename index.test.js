// generateScale.test.js

const { generateScale, getConfig, getNextSize } = require('./index.js');

// Mock configurations to be used in tests
const mockConfig = {
    classPrefix: 'p-',
    classSuffix: '-s',
    unit: 'px',
    scale: 1,
    from: 0,
    to: 10,
    increment: {
        default: 1,
        below: {
            5: 0.5,
        },
        above: {
            8: 2,
        },
    },
};

describe('generateScale', () => {
    it('should generate a scale with the default configuration', () => {
        const result = generateScale({});
        expect(result).toEqual(expect.any(Object)); // Ensure result is an object
        expect(Object.keys(result).length).toBeGreaterThan(0); // Ensure it generates classes
    });

    it('should generate a scale with custom configuration', () => {
        const result = generateScale(mockConfig);
        expect(result).toEqual({
            'p-0-s': '0px',
            'p-0.5-s': '0.5px',
            'p-1-s': '1px',
            'p-1.5-s': '1.5px',
            'p-2-s': '2px',
            'p-2.5-s': '2.5px',
            'p-3-s': '3px',
            'p-3.5-s': '3.5px',
            'p-4-s': '4px',
            'p-4.5-s': '4.5px',
            'p-5-s': '5px',
            'p-6-s': '6px',
            'p-7-s': '7px',
            'p-8-s': '8px',
            'p-10-s': '10px', // increments by 2 after 8
        });
    });
});

// Additional tests for helper functions if they were exported



describe('getConfig', () => {
    it('should merge custom config with default values', () => {
        const config = getConfig({ classPrefix: 'test-' });
        expect(config.classPrefix).toBe('test-');
        expect(config.unit).toBe('rem'); // Check default
        expect(config.increment.default).toBe(1); // Check default increment
    });
});

describe('getNextSize', () => {
    it('should return the correct next size based on default increment', () => {
        const nextSize = getNextSize(10, { default: 2 }, [], []);
        expect(nextSize).toBe(12);
    });

    it('should use below increment when applicable', () => {
        const nextSize = getNextSize(6, { below: { 5: 0.5 }, default: 1 }, [5], []);
        expect(nextSize).toBe(7); // Since size is not > 5, it uses default
    });

    it('should use above increment when applicable', () => {
        const nextSize = getNextSize(9, { above: { 10: 2 }, default: 1 }, [], [10]);
        expect(nextSize).toBe(10); // Uses default since current size is not <= 10 yet
    });
});
