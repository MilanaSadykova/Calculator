import { parse } from "src/calculator";

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
        test('1+a-3 (invalid symbol)', () => {
            try {
                parse('1+a-3');
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe('Parsing: Unexpected symbol a at position 3');
            }
        });
        test('1+123.323.23-3 (invalid number)', () => {
            try {
                parse('1+123.323.23-3');
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe('Parsing: Invalid number expression 123.323.23, at position 3-12');
            }
        })
    })
    describe('should return expression array on valid input', () => {
        test('(1 + (2 - 3 / 3 * 1 ^ 3))', () => {
            const expected = [
                { "type": "operator", "value": "(" },
                { "type": "number", "value": 1 },
                { "type": "operator", "value": "+" },
                { "type": "operator", "value": "(" },
                { "type": "number", "value": 2 },
                { "type": "operator", "value": "-" },
                { "type": "number", "value": 3 },
                { "type": "operator", "value": "/" },
                { "type": "number", "value": 3 },
                { "type": "operator", "value": "*" },
                { "type": "number", "value": 1 },
                { "type": "operator", "value": "^" },
                { "type": "number", "value": 3 },
                { "type": "operator", "value": ")" },
                { "type": "operator", "value": ")" }
            ]
            const actual = parse('(1 + (2 - 3 / 3 * 1 ^ 3))');
            expect(JSON.stringify(actual))
                .toBe(JSON.stringify(expected));
        })
    })
});


