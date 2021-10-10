import { Expression, ExpressionType } from "./Expression";

/**
 * Expression interface extension for numbers.
 */
export interface NumberExpression extends Expression {
    type: ExpressionType.NUMBER;
    value: number,
}