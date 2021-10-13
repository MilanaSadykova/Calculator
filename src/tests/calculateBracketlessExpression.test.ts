import { parse } from "src/parse";
import { Expression, ExpressionType } from "src/models/Expression";
import { calculateBracketlessExpression } from "src/calculateBracketlessExpression";

describe(('calculateBracketlessExpression function'), () => {
    test(('2*2+8/4-3^3'), () => {
        const actual = calculateBracketlessExpression(
            parse('2*2+8/4-3^3') as Expression[]
        );
        const expected = {
            type: ExpressionType.NUMBER,
            value: -21
        };
        expect(actual).toStrictEqual(expected);
    });
});


