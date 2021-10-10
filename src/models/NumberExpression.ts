import { Expression } from "./Expression";
import { NumberContainer } from "./NumberContainer";

/**
 * Expression interface extension for numbers.
 */
export interface NumberExpression extends Expression {
    value: NumberContainer,
}