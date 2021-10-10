import { NumberContainer } from "./NumberContainer";
import { Operator } from "./Operator.enum";

/**
 * Common interface for numbers and operators expressions.
 */
export interface Expression {
    value: NumberContainer | Operator;
}