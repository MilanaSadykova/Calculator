import { calculate } from "./calculate";

const expression = process.argv[2];
if (!expression) {
    console.warn('No expression provided');
} else {
    const solution = calculate(expression);
    console.log(solution);
}