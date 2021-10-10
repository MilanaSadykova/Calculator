import { Expression, ExpressionType } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { Operator } from "./Operator.enum";
import { OperatorExpression } from "./OperatorExpression";

export const OPERATOR_APPLY: Record<Operator, OperatorExpression['apply']> = {
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
}