import { calculate } from "src/calculate";

describe(('calculate function'), () => {
    test(('2+5-(9/2-3)*4^2'), () => {
        const actual = calculate('2+5-(9/2-3)*4^2');
        expect(actual).toBe(-17);
    })
    test(('1/0'), () => {
        const actual = calculate('1/0');
        expect(actual).toBe(Infinity);
    })
});
