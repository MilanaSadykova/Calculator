import { Operator } from "./models/Operator.enum";

const operatorsSet = new Set([
    Operator.MINUS,
    Operator.PLUS,
    Operator.OPEN_BRACKET,
    Operator.CLOSE_BRACKET,
    Operator.MULTIPLY,
    Operator.DIVIDE,
    Operator.POWER,
]);

/**
 * Checks if string symbol is within operatorsSet.
 */
export const isOperator = (symbol?: string): boolean => {
    if (!symbol) {
        return false;
    }
    if (operatorsSet.has(symbol as Operator)) {
        return true;
    }
    return false;
};