import { calculateBracketlessExpression } from "./calculateBracketlessExpression";
import { Expression } from "./models/Expression";
import { Operator } from "./models/Operator.enum";

/**
 * Check is expressions has open bracket.
 */
const hasOpenBracket = (initExpressions: Expression[]): boolean =>
    initExpressions.some(expression => expression.value === Operator.OPEN_BRACKET);

/**
 * Get expressions between deepest bracket in init expressions.
 */
const getDeepestExpressionIndices = (initExpressions: Expression[]): [number, number] | null => {
    let openBracketPosition = null;
    let closeBracketPosition = null;
    let depth = 0;
    let topDepth = 0;
    for (let i = 0; i < initExpressions.length; i++) {
        const expression = initExpressions[i];
        if (expression.value === Operator.OPEN_BRACKET) {
            depth++;
            if (depth > topDepth) {
                topDepth = depth;
                openBracketPosition = i;
            }
        } else if (expression.value === Operator.CLOSE_BRACKET) {
            depth--;
        }
    }
    if (openBracketPosition === null) {
        return null;
    }
    for (let i = openBracketPosition; i < initExpressions.length; i++) {
        const expression = initExpressions[i];
        if (expression.value === Operator.CLOSE_BRACKET) {
            closeBracketPosition = i;
            break;
        }
    }
    return [openBracketPosition + 1, closeBracketPosition as number - 1];
};

/**
 * Calculate expressions consisting of numbers and operators.
 */
export const calculateExpressions = (initExpressions: Expression[]): number => {
    const expressions: Expression[] = [...initExpressions];
    while (hasOpenBracket(expressions)) {
        const deepestExpressionIndices = getDeepestExpressionIndices(expressions);
        if (deepestExpressionIndices !== null) {
            const [subExpressionsStartIndex, subExpressionsEndIndex] = deepestExpressionIndices;
            const expressionResult = calculateBracketlessExpression(
                expressions.slice(subExpressionsStartIndex, subExpressionsEndIndex + 1)
            );
            expressions.splice(
                subExpressionsStartIndex - 1,
                subExpressionsEndIndex - subExpressionsStartIndex + 3,
                expressionResult,
            );
        }
    }
    const finalResult = calculateBracketlessExpression(expressions);
    return finalResult.value as number;
};


