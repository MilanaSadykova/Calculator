import { calculate } from "./calculate";

/*
Разбить файл calculator.ts на function/file          +
Поместить тестовый файл для function в тот же файл   -
JSDOC всему                                          +
Достать args и выполнять для них calculate           +

README со мной

*/
const expression = process.argv[2];
if (!expression) {
    console.warn('No expression provided');
} else {
    const solution = calculate(expression);
    console.log(solution);
}