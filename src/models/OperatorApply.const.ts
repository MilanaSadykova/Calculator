import { Expression, ExpressionType } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { Operator } from "./Operator.enum";
import { OperatorExpression } from "./OperatorExpression";

// @ts-ignore TODO remove once bracket apply func is defined
export const OPERATOR_APPLY: {
    [key in Operator]: (...args: Expression[]) => NumberExpression
} = {
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
}