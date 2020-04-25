const calculadoraFn = (num1, op, num2) => op(num1, num2)

const soma = (num1, num2) => num1+num2
const sub = (num1, num2) => num1-num2
const mult = (num1, num2) => num1*num2
const div = (num1, num2) => num1/num2

console.log(calculadoraFn(10, soma, 20))
console.log(calculadoraFn(10, sub, 20))
console.log(calculadoraFn(10, mult, 20))
console.log(calculadoraFn(10, div, 20))
