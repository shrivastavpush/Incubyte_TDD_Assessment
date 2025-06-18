const add = require('./add');

describe('String Calculator', () => {
    test('returns 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('returns the number for a single number', () => {
        expect(add('1')).toBe(1);
    });

    test('returns the sum of two numbers separated by comma', () => {
        expect(add('2,2')).toBe(4);
    });
});
