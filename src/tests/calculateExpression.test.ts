import { parse } from "src/calculator";
import { calculateExpressions } from "src/calculateExpressions";
import { Expression, ExpressionType } from "src/models/Expression";

describe(('calculate expressions'), () => {
    describe(('calculate expressions without brackets'), () => {
        test(('2*2+8/4-3^3'), () => {
            const actual = calculateExpressions(
                parse('2*2+8/4-3^3') as Expression[]
            );
            const expected = { 
                type: ExpressionType.NUMBER, 
                value: -21 
            };
            expect(actual).toStrictEqual(expected);
        });
    })
});
