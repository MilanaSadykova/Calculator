import { parse, validate } from "src/calculator"
import { Expression } from "src/models/Expression";

describe('validate function', () => {
    describe('should return null on valid expressionsArray', () => {
        test('(1 + (2 - 3 / 3 * 1 ^ 3))', () => {
            const validExpressions = parse('(1 + (2 - 3 / 3 * 1 ^ 3))');
            const actual = validate(validExpressions as Expression[]);
            expect(actual).toBeNull();
        })
    })
    describe('should return exception on invalid expressionsArray', () => {
        test(('2+ // right operand'), () => {
            const invalidExpression = parse('2+');
            try {
                validate(invalidExpression as Expression[]);
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe(`Validation: invalid right operand 'nothing' at + operator`);
            }
        });
        test(('2* // right operand'), () => {
            const invalidExpression = parse('2*');
            try {
                validate(invalidExpression as Expression[]);
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe(`Validation: invalid right operand 'nothing' at * operator`);
            }
        });
        test(('*2 // left operand'), () => {
            const invalidExpression = parse('*2');
            try {
                validate(invalidExpression as Expression[]);
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe(`Validation: invalid left operand 'nothing' at * operator`);
            }
        });
        test(('(123 // brackets mismatch'), () => {
            const invalidExpression = parse('(123');
            try {
                validate(invalidExpression as Expression[]);
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe(`Validation: brackets mismatch, check that every bracket has pair`);
            }
        });
        test(('() // empty'), () => {
            const invalidExpression = parse('()');
            try {
                validate(invalidExpression as Expression[]);
                throw new Error('Test passed for invalid scenario');
            } catch (e) {
                expect((e as Error).message).toBe(`Validation: invalid right operand ) at ( operator`);
            }
        });
    })
})