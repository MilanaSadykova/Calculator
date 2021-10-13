import { isOperator } from "src/isOperator";

describe('isOperator function', () => {
    describe('should return false for invalid input', () => {
        test('null', () => {
            // @ts-ignore need to check that scenario anyways
            expect(isOperator(null)).toBe(false);
        })
        test('undefined', () => {
            expect(isOperator(undefined)).toBe(false);
        })
        test('empty string', () => {
            expect(isOperator('')).toBe(false);
        })
    });
    describe('should return boolean for valid input', () => {
        test('"+"; // true', () => {
            expect(isOperator('+')).toBe(true);
        })
        test('"++"; // false', () => {
            expect(isOperator('++')).toBe(false);
        })
    });
});
