const numbersSet = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);

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
