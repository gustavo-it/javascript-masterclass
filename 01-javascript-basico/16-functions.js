function hello() {
  console.log('Hello, World!');
}

hello();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Maria');

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3));

function multiply(a = 1, b = 1) {
  return a * b;
}
console.log(multiply(4, 7));
console.log(multiply());

const divide = function (a, b) {
  return a / b;
};

console.log(divide(10, 2));

const square = (x) => x * x;
console.log(square(5));
