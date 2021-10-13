import { calculateExpressions } from "./calculateExpressions";
import { parse } from "./parse";
import { validate } from "./validate";

/**
 * Calculate expressions.
 */
export const calculate = (initExpressions: string): number | null => {
    const parsedExpression = parse(initExpressions);
    if (parsedExpression === null) {
        return null;
    }
    const isValid = validate(parsedExpression);
    if (isValid !== null) { // won't happen, TS check
        return null;
    }
    return calculateExpressions(parsedExpression);
};
