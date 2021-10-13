import { isNumber } from "./isNumber";
import { isOperator } from "./isOperator";
import { Expression, ExpressionType } from "./models/Expression";
import { Operator } from "./models/Operator.enum";
import { OperatorExpression } from "./models/OperatorExpression";

/**
 * Parses input to expressions array. Throws exception if input is invalid.
 */
export const parse = (inputExpression?: string): Expression[] | null => {
    if (inputExpression === null
        || inputExpression === undefined
        || typeof inputExpression === 'string' && inputExpression.trim() === '') {
        return null;
    };
    const expression = inputExpression.replace(/ |\n/g, '');
    const expressionsArray: Expression[] = [];
    let isSymbolNumber = false;
    let numberSymbols = '';
    for (let i = 0; i < expression.length; i++) {
        const symbol = expression[i];
        if (isOperator(symbol)) {
            if (isSymbolNumber === true) {
                isSymbolNumber = false;
                const numberValue = Number(numberSymbols);
                if (isNaN(numberValue)) {
                    throw new Error(`Parsing: Invalid number expression ${numberSymbols}, at position ${i - numberSymbols.length + 1}-${i}`);
                }
                numberSymbols = '';
                expressionsArray.push({
                    type: ExpressionType.NUMBER,
                    value: numberValue
                });
            }
            const operatorExpression: OperatorExpression = {
                type: ExpressionType.OPERATOR,
                value: symbol as Operator,
            };
            expressionsArray.push(operatorExpression);
            continue;
        }
        if (isNumber(symbol)) {
            isSymbolNumber = true;
            numberSymbols += symbol;
            if (i === expression.length - 1) { // if last element
                expressionsArray.push({
                    type: ExpressionType.NUMBER,
                    value: Number(numberSymbols),
                });
            }
            continue;
        }
        throw new Error(`Parsing: Unexpected symbol ${symbol} at position ${i + 1}`);
    }
    return expressionsArray;
};
