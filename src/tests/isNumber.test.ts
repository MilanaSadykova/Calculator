import { isNumber } from "src/calculator";

describe('isNumber function', () => {
    describe('should return false for invalid input', () => {
        test('null', () => {
            // @ts-ignore need to check that scenario anyways
            expect(isNumber(null)).toBe(false);
        })
        test('undefined', () => {
            expect(isNumber(undefined)).toBe(false);
        })
        test('empty string', () => {
            expect(isNumber('')).toBe(false);
        })
    });
    describe('should return boolean for valid input', () => {
        test('"1"; // true', () => {
            expect(isNumber('1')).toBe(true);
        })
        test('"."; // true', () => {
            expect(isNumber('.')).toBe(true);
        })
        test('"123"; // false', () => {
            expect(isNumber('123')).toBe(false);
        })
        test('"a"; // false', () => {
            expect(isNumber('a')).toBe(false);
        })
    });
});
