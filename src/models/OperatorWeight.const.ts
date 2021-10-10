import { Operator } from "./Operator.enum";

/**
 * Map of operator to it's weight.
 */
export const OPERATOR_WEIGHT: Record<Operator, number> = {
    [Operator.PLUS]: 2,
    [Operator.MINUS]: 1,
}
