import { Expression, ExpressionType } from "./models/Expression";
import { NumberExpression } from "./models/NumberExpression";
import { Operator } from './models/Operator.enum';
import { OPERATOR_APPLY } from "./models/OperatorApply.const";
import { OperatorExpression } from "./models/OperatorExpression";

const numbersSet = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);
const operatorsSet = new Set([
    Operator.MINUS,
    Operator.PLUS,
]);

/**
 * Checks if string symbol is within numbersSet.
 */
export const isNumber = (symbol?: string): boolean => {
    if (!symbol) {
        return false;
    }
    if (numbersSet.has(symbol)) {
        return true;
    }
    return false;
};

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

/**
 * Parses input to expressions array. Throws exception if input is invalid.
 */
export const parse = (inputExpression?: string): Expression[] | null => {
    if (inputExpression === null
        || inputExpression === undefined
        || typeof inputExpression === 'string' && inputExpression.trim() === '') {
        return null;
    };
    const expressionsArray: Expression[] = [];
    let isSymbolNumber = false;
    let numberSymbols = '';
    for (let i = 0; i < inputExpression.length; i++) {
        const symbol = inputExpression[i];
        if (isOperator(symbol)) {
            if (isSymbolNumber === true) {
                isSymbolNumber = false;
                expressionsArray.push({
                    type: ExpressionType.NUMBER,
                    value: Number(numberSymbols)
                });
                numberSymbols = '';
            }
            const operatorExpression: OperatorExpression = {
                type: ExpressionType.OPERATOR,
                value: symbol as Operator,
                apply: OPERATOR_APPLY[symbol as Operator],
            };
            expressionsArray.push(operatorExpression);
            continue;
        }
        if (isNumber(symbol)) {
            isSymbolNumber = true;
            numberSymbols += symbol;
            if (i === inputExpression.length - 1) {
                expressionsArray.push({
                    type: ExpressionType.NUMBER,
                    value: Number(numberSymbols),
                });
            }
            continue;
        }
        throw new Error(`Parsing exception: Unexpected symbol ${symbol}, at position ${i + 1}`);
    }
    return expressionsArray;
}