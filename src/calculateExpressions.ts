import { Expression, ExpressionType } from "./models/Expression";
import { NumberExpression } from "./models/NumberExpression";
import { Operator } from "./models/Operator.enum";
import { OPERATOR_APPLY } from "./models/OperatorApply.const";
import { OperatorExpression } from "./models/OperatorExpression";

const applyOperatorsInExpressions = (operator: Operator, expressions: Expression[]): void => {
    for (let i = 0; i < expressions.length; i++) {
        const expression = expressions[i];
        if (expression.value === operator) {
            const subResult = OPERATOR_APPLY[operator](expressions[i - 1], expressions[i + 1]);
            expressions.splice(i - 1, 3, subResult);
            i -= 1; // to get to next value after splice
        }
    }
}

/**
 * Calculate expressions without brackets.
 */
export const calculateExpressions = (initExpressions: Expression[]): NumberExpression => {
    const expressions = [...initExpressions];
    applyOperatorsInExpressions(Operator.POWER, expressions);
    applyOperatorsInExpressions(Operator.DIVIDE, expressions);
    applyOperatorsInExpressions(Operator.MULTIPLY, expressions);
    applyOperatorsInExpressions(Operator.MINUS, expressions);
    applyOperatorsInExpressions(Operator.PLUS, expressions);
    return expressions[0] as NumberExpression;
};