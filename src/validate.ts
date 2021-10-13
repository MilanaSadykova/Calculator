import { Expression, ExpressionType } from "./models/Expression";
import { Operator } from "./models/Operator.enum";
import { OperatorExpression } from "./models/OperatorExpression";

/**
 * Throw Exception if expression is not valid. 
 */
export const validate = (expressions: Expression[]): null => {
    let bracketsDepth = 0;
    for (let i = 0; i < expressions.length; i++) {
        const expression = expressions[i];
        if (expression.type === ExpressionType.NUMBER) {
            continue;
        }
        if (expression.type === ExpressionType.OPERATOR) {
            if (expression.value === Operator.CLOSE_BRACKET) {
                bracketsDepth--;
                continue;
            } else if (expression.value === Operator.OPEN_BRACKET) {
                bracketsDepth++;
            }
            const leftOperand = expressions[i - 1];
            const rightOperand = expressions[i + 1];
            let isLeftOperandValid: boolean = false;
            let isRightOperandValid: boolean = false;
            switch ((expression as OperatorExpression).value) {
                case Operator.MINUS:
                case Operator.PLUS:
                    isLeftOperandValid = leftOperand === undefined
                        || leftOperand.value === Operator.OPEN_BRACKET
                        || leftOperand.value === Operator.CLOSE_BRACKET
                        || leftOperand.type === ExpressionType.NUMBER;
                    isRightOperandValid = rightOperand?.type === ExpressionType.NUMBER
                        || rightOperand?.value === Operator.OPEN_BRACKET;
                    break;
                case Operator.DIVIDE:
                case Operator.MULTIPLY:
                case Operator.POWER:
                    isLeftOperandValid = leftOperand?.type === ExpressionType.NUMBER
                        || leftOperand?.value === Operator.CLOSE_BRACKET;
                    isRightOperandValid = rightOperand?.type === ExpressionType.NUMBER
                        || leftOperand?.value === Operator.OPEN_BRACKET;
                    break;
                case Operator.OPEN_BRACKET:
                    isLeftOperandValid = true; // always ok
                    isRightOperandValid = rightOperand?.value !== Operator.CLOSE_BRACKET;
                    break;
            }
            if (!isLeftOperandValid) {
                throw new Error(`Validation: invalid left operand ${leftOperand?.value || "'nothing'"} at ${expression.value} operator`);
            }
            if (!isRightOperandValid) {
                throw new Error(`Validation: invalid right operand ${rightOperand?.value || "'nothing'"} at ${expression.value} operator`);
            }
        }
    }
    if (bracketsDepth !== 0) {
        throw new Error(`Validation: brackets mismatch, check that every bracket has pair`);
    }
    return null; // all good
};
