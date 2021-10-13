import { Expression, ExpressionType } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { Operator } from "./Operator.enum";

/**
 * Defines how operators apply to expressions.
 */
export const OPERATOR_APPLY: Record<
    Operator,
    (...args: Expression[]) => NumberExpression
> = {
    [Operator.PLUS]: (...args: Expression[]) => {
        const [leftOperand, rightOperand] = args as NumberExpression[];
        return {
            type: ExpressionType.NUMBER,
            value: leftOperand.value + rightOperand.value,
        }
    },
    [Operator.MINUS]: (...args: Expression[]) => {
        const [leftOperand, rightOperand] = args as NumberExpression[];
        return {
            type: ExpressionType.NUMBER,
            value: leftOperand.value - rightOperand.value
        }
    },
    [Operator.MULTIPLY]: (...args: Expression[]) => {
        const [leftOperand, rightOperand] = args as NumberExpression[];
        return {
            type: ExpressionType.NUMBER,
            value: leftOperand.value * rightOperand.value
        }
    },
    [Operator.DIVIDE]: (...args: Expression[]) => {
        const [leftOperand, rightOperand] = args as NumberExpression[];
        return {
            type: ExpressionType.NUMBER,
            value: leftOperand.value / rightOperand.value
        }
    },
    [Operator.POWER]: (...args: Expression[]) => {
        const [leftOperand, rightOperand] = args as NumberExpression[];
        return {
            type: ExpressionType.NUMBER,
            value: leftOperand.value ** rightOperand.value
        }
    },
    // TODO mock for typescript, not used
    [Operator.OPEN_BRACKET]: (...args: Expression[]) => {
        return {
            type: ExpressionType.NUMBER,
            value: NaN,
        }
    },
    // TODO mock for typescript, not used
    [Operator.CLOSE_BRACKET]: (...args: Expression[]) => {
        return {
            type: ExpressionType.NUMBER,
            value: NaN,
        }
    },
}