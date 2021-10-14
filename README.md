# Calculator

### Node.js program for calculating simple math expressions. 
### Features: 
* Can handle operators: + - * / ^ ()
* Input validation: if expression is not valid math expression that calculator can interpret, then helpful error message would be shown.

## Technologies

### Backend
* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)

### Project Assembly
* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

## Local Set Up
1. Git clone this repository.
```
git clone https://github.com/MilanaSadykova/Calculator.git
```
2. Run these commands in root directory of repository to build application.
```
npm i
npm run build
```

## How to run Calculator
Run this command in root directory of repository with math expression.
```
npm run start 2+2
```
or if project is built, then
```
npm run calculate 2+2
```
or with running script directly
```
node ./build/main.js 2+2
```
Note: don't put spaces between symbols or wrap expression with ", like that:
```
node ./build/main.js "2+2"
```
## How to run tests
Run this command in root directory of repository to test application. 
```
npm run test
```

## License
[MIT](https://mit-license.org/)