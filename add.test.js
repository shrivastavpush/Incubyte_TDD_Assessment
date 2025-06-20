const add = require('./add');

describe('String Calculator', () => {

    // point 1.1 - handle empty string
    test('returns 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    // point 1.2 - handle single number
    test('returns the number for a single number', () => {
        expect(add('1')).toBe(1);
    });

    // point 1.3 - handle two numbers separated by comma
    test('returns the sum of two numbers separated by comma', () => {
        expect(add('2,2')).toBe(4);
    });

    // point 2 - handle unknown amount of numbers
    test('returns the sum of an unknown amount of numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
        expect(add('10,20,30,40,50,60')).toBe(210);
    });

    // point 3 - handle new lines between numbers
    test('handles new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
        expect(add('10\n20\n30,40,50')).toBe(150);
    });

    // point 4 - Custom delimiters
    test('supports custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
        expect(add('//|\n1|2|3')).toBe(6);
        expect(add('//\n\n1\n2')).toBe(3);  // Empty delimiter should default to newline
    });

    // point 5 - Negative numbers
    test('throws an exception for negative numbers', () => {
        expect(() => add('-1')).toThrow('negatives not allowed: -1');
        expect(() => add('2,-4,3,-5')).toThrow('negatives not allowed: -4, -5');
        expect(() => add('-1,-2,-3')).toThrow('negatives not allowed: -1, -2, -3');
        expect(() => add('//;\n1;-2;3')).toThrow('negatives not allowed: -2');
    });

    // point 6 - Numbers bigger than 1000 are ignored
    test('ignores numbers bigger than 1000', () => {
        expect(add('1001')).toBe(0);
        expect(add('2,1001')).toBe(2);
        expect(add('1001,1002,1003')).toBe(0);
        expect(add('1,1001,2,1002,3')).toBe(6);
        expect(add('1000,1001')).toBe(1000);
        expect(add('//;\n1;1001;2')).toBe(3);
    });
});
