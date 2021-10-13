import { Expression, ExpressionType } from "./models/Expression";
import { NumberExpression } from "./models/NumberExpression";
import { Operator } from "./models/Operator.enum";
import { OPERATOR_APPLY } from "./models/OperatorApply.const";
import { OperatorExpression } from "./models/OperatorExpression";

/**
 * Apply operator in expressions.
 */
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
export const calculateBracketlessExpression = (initExpression: Expression[]): NumberExpression => {
    const expression = [...initExpression];
    applyOperatorsInExpressions(Operator.POWER, expression);
    applyOperatorsInExpressions(Operator.DIVIDE, expression);
    applyOperatorsInExpressions(Operator.MULTIPLY, expression);
    applyOperatorsInExpressions(Operator.MINUS, expression);
    applyOperatorsInExpressions(Operator.PLUS, expression);
    return expression[0] as NumberExpression;
};