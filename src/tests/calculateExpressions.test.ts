import { parse } from 'src/parse';
import { calculateExpressions } from 'src/calculateExpressions';
import { Expression } from 'src/models/Expression';

describe(('calculateExpressions function'), () => {
    test('(2 + 2) * (12 - (2 + 2) * 2)', () => {
        const actual = calculateExpressions(
            parse('(2 + 2) * (12 - (2 + 2) * 2)') as Expression[]
        );
        expect(actual).toBe(16);
    })
    test('(2 ^ 3)', () => {
        const actual = calculateExpressions(
            parse('(2 ^ 3)') as Expression[]
        );
        expect(actual).toBe(8);
    })
});
