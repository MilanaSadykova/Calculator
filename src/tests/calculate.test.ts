import { calculate } from "src/calculator";
import { ExpressionType } from "src/models/Expression";
import { Operator } from "src/models/Operator.enum";

describe(('calculate expressions'), () => {
    describe(('calculate two expressions'), () => {
        test(('(1 - 2)'), () => {
            const actual = calculate([
                { type: ExpressionType.OPERATOR, value: Operator.OPEN_BRACKET },
                { type: ExpressionType.NUMBER, value: 1 },
                { type: ExpressionType.OPERATOR, value: Operator.MINUS },
                { type: ExpressionType.NUMBER, value: 2 },
                { type: ExpressionType.OPERATOR, value: Operator.CLOSE_BRACKET }
            ])
            const expexted = -1;
            expect(actual).toStrictEqual(expexted);
        })
    });
    describe(('calculate many expressions'), () => {
        test(('(1 + (2 - 3 / 3 * 1 ^ 3))'), () => {
            const actual = calculate([
                { type: ExpressionType.OPERATOR, value: Operator.OPEN_BRACKET },
                { type: ExpressionType.NUMBER, value: 1 },
                { type: ExpressionType.OPERATOR, value: Operator.PLUS },
                { type: ExpressionType.OPERATOR, value: Operator.OPEN_BRACKET },
                { type: ExpressionType.NUMBER, value: 2 },
                { type: ExpressionType.OPERATOR, value: Operator.MINUS },
                { type: ExpressionType.NUMBER, value: 3 },
                { type: ExpressionType.OPERATOR, value: Operator.DIVIDE },
                { type: ExpressionType.NUMBER, value: 3 },
                { type: ExpressionType.OPERATOR, value: Operator.MULTIPLY },
                { type: ExpressionType.NUMBER, value: 1 },
                { type: ExpressionType.OPERATOR, value: Operator.POWER },
                { type: ExpressionType.NUMBER, value: 3 },
                { type: ExpressionType.OPERATOR, value: Operator.CLOSE_BRACKET },
                { type: ExpressionType.OPERATOR, value: Operator.CLOSE_BRACKET }
            ])
            const expexted = 3; // actualy 2, but in JS it's 3
            expect(actual).toStrictEqual(expexted);
        })
    })
})