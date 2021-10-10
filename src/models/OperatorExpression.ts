import { Expression } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { Operator } from "./Operator.enum";

/**
 * Expression interface extension for operators.
 */
export interface OperatorExpression extends Expression {
    value: Operator;
    apply: (...args: Expression[]) => NumberExpression;
};
