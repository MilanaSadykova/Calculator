import { Expression, ExpressionType } from "./models/Expression";
import { NumberExpression } from "./models/NumberExpression";
import { Operator } from './models/Operator.enum';
import { OPERATOR_APPLY } from "./models/OperatorApply.const";
import { OperatorExpression } from "./models/OperatorExpression";

const numbersSet = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);
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
}

export const validate = (expressions: Expression[]): null => {
    let bracketsDepth = 0;
    for (let i = 0; i < expressions.length; i++) {
        const expression = expressions[i];
        if (expression.type === ExpressionType.NUMBER) {
            continue;
        }
        if (expression.type === ExpressionType.OPERATOR) {
            if (expression.value === Operator.CLOSE_BRACKET) {
                bracketsDepth--;
                continue;
            } else if (expression.value === Operator.OPEN_BRACKET) {
                bracketsDepth++;
                continue;
            }
            const leftOperand = expressions[i - 1];
            const rightOperand = expressions[i + 1];
            let isLeftOperandValid: boolean = false;
            let isRightOperandValid: boolean = false;
            switch ((expression as OperatorExpression).value) {
                case Operator.MINUS:
                case Operator.PLUS:
                    isLeftOperandValid = leftOperand === undefined
                        || leftOperand.value === Operator.OPEN_BRACKET
                        || leftOperand.value === Operator.CLOSE_BRACKET
                        || leftOperand.type === ExpressionType.NUMBER;
                    isRightOperandValid = rightOperand?.type === ExpressionType.NUMBER
                        || rightOperand?.value === Operator.OPEN_BRACKET;
                    break;
                case Operator.DIVIDE:
                case Operator.MULTIPLY:
                case Operator.POWER:
                    isLeftOperandValid = leftOperand?.type === ExpressionType.NUMBER
                        || leftOperand?.value === Operator.CLOSE_BRACKET;
                    isRightOperandValid = rightOperand?.type === ExpressionType.NUMBER
                        || leftOperand?.value === Operator.OPEN_BRACKET;
                    break;
            }
            if (!isLeftOperandValid) {
                throw new Error(`Validation: invalid left operand ${leftOperand?.value || "'nothing'"} at ${expression.value} operator`);
            }
            if (!isRightOperandValid) {
                throw new Error(`Validation: invalid right operand ${rightOperand?.value || "'nothing'"} at ${expression.value} operator`);
            }
        }
    }
    if (bracketsDepth !== 0) {
        throw new Error(`Validation: brackets mismatch, check that every bracket has pair`);
    }
    return null; // all good
}