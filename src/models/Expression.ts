import { Operator } from "./Operator.enum";

export enum ExpressionType {
    NUMBER = 'number',
    OPERATOR = 'operator',
}

/**
 * Common interface for numbers and operators expressions.
 */
export interface Expression {
    type: ExpressionType;
    value: number | Operator;
}