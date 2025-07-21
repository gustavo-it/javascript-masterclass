/**
 * Exibe a mensagem "Hello, World!" no console.
 *
 * @function hello
 * @returns {void}
 */
function hello() {
  console.log('Hello, World!');
}

hello();

/**
 * Exibe uma saudação personalizada no console.
 *
 * @function greet
 * @param {string} name - O nome da pessoa a ser saudada.
 * @returns {void}
 */
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Maria');

/**
 * Soma dois números e retorna o resultado.
 *
 * @function sum
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 */
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3));

/**
 * Multiplica dois números com valores padrão de 1.
 *
 * @function multiply
 * @param {number} [a=1] - O primeiro número.
 * @param {number} [b=1] - O segundo número.
 * @returns {number} O resultado da multiplicação de a por b.
 */
function multiply(a = 1, b = 1) {
  return a * b;
}

console.log(multiply(4, 7));
console.log(multiply());

/**
 * Divide dois números e retorna o resultado.
 *
 * @constant {Function} divide - Função anônima atribuída a uma constante.
 * @param {number} a - O dividendo.
 * @param {number} b - O divisor.
 * @returns {number} O resultado da divisão de a por b.
 */
const divide = function (a, b) {
  return a / b;
};

console.log(divide(10, 2));

/**
 * Calcula o quadrado de um número.
 *
 * @constant {Function} square - Função arrow que retorna o quadrado de x.
 * @param {number} x - O número a ser elevado ao quadrado.
 * @returns {number} O quadrado de x.
 */
const square = (x) => x * x;

console.log(square(5));
