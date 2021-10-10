import { isNumber, isOperator, parse } from "./calculator"

describe('parse function', () => {
    describe('should return null on empty input', () => {
        test('undefined', () => {
            expect(parse()).toBeNull();
        });
        test('null', () => {
            // @ts-ignore need to check that scenario anyways
            expect(parse(null)).toBeNull();
        });
        test('empty string', () => {
            expect(parse('')).toBeNull();
        });
        test('string with only whitespaces', () => {
            expect(parse('     ')).toBeNull();
        });
    })
    describe('should throw exception on invalid input', () => {
        test('1+a-3', () => {
            try {
                parse('1+a-3');
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe('Parsing exception: Unexpected symbol a, at position 3');
            }
        })
    })
    describe('should return expression array on valid input', () => {
        test('1+2-3', () => {
            const expected = `[
                {"type":"number","value":1}
                ,{"type":"operator","value":"+"}
                ,{"type":"number","value":2}
                ,{"type":"operator","value":"-"}
                ,{"type":"number","value":3}
            ]`.replace(/ |\n/g, '');
            expect(JSON.stringify(parse('1+2-3'))).toBe(expected);
        })
    })
});


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