import { Operator } from "./Operator.enum";

/**
 * Map of operator to it's weight.
 */
export const OperatorWeight: Record<Operator, number> = {
    [Operator.PLUS]: 2,
    [Operator.MINUS]: 1,
}
