import { calculateExpressionsWithBrackets, parse } from 'src/calculator';
import { Expression } from 'src/models/Expression';

describe(('calculateExpressionsWithBrackets function'), () => {
    test('(2 + 2) * (12 - (2 + 2) * 2)', () => {
        const actual = calculateExpressionsWithBrackets(
            parse('(2 + 2) * (12 - (2 + 2) * 2)') as Expression[]
        );
        expect(actual).toBe(16);
    })
    test('(2 ^ 3)', () => {
        const actual = calculateExpressionsWithBrackets(
            parse('(2 ^ 3)') as Expression[]
        );
        expect(actual).toBe(8);
    })
})