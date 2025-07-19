/**
 * Demonstração de funções matemáticas em JavaScript usando o objeto Math.
 *
 * Exemplos:
 * - Math.floor(): Arredonda o número para baixo.
 * - Math.ceil(): Arredonda o número para cima.
 * - Math.round(): Arredonda o número para o inteiro mais próximo.
 * - Math.max(): Retorna o maior valor entre os argumentos.
 * - Math.min(): Retorna o menor valor entre os argumentos.
 * - Math.random(): Retorna um número pseudoaleatório entre 0 (inclusive) e 1 (exclusivo).
 * - Math.pow(): Retorna a base elevada ao expoente.
 */
let number1 = 10;
let number2 = 5;
let number3 = 9.54785;

console.log(Math.floor(number3));
console.log(Math.ceil(number3));
console.log(Math.round(number3));
console.log(Math.max(number1, number2, number3));
console.log(Math.min(number1, number2, number3));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));
console.log(Math.pow(2, 10));
