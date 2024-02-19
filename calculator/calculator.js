const calculator = {
    plus: function plus(a, b) {
        console.log(a + " + " + b + " = " + (a + b));
    },
    minus: function minus(a, b) {
        console.log(a + " - " + b + " = " + (a - b));
    },
    multiply: function multiply(a, b) {
        console.log(a + " * " + b + " = " + a * b);
    },
    divide: function divide(a, b) {
        console.log(a + " / " + b + " = " + a / b);
    },
};

calculator.plus(5, 7);
calculator.minus(8, 3);
calculator.multiply(8, 9);
calculator.divide(9, 3);
