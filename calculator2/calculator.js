const calculator = {
    plus: function plus(a, b) {
        return a + b;
    },
    minus: function minus(a, b) {
        return a - b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    },
    divide: function divide(a, b) {
        return a / b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.multiply(20, minusResult);
const divideResult = calculator.divide(minusResult, plusResult);
