/**
 * Demonstra operações básicas com números em JavaScript:
 * - Conversão de número para string.
 * - Arredondamento de número decimal para duas casas decimais.
 * - Verificação se um valor é inteiro.
 * - Verificação se uma operação resulta em NaN.
 * - Demonstração de como evitar imprecisão em operações com ponto flutuante.
 */
let num1 = 10;
num1 = num1.toString();
console.log(num1, typeof num1);

let num2 = 25.5231145;
let num3 = 100;
console.log(num2.toFixed(2));

console.log(Number.isInteger(num3));
console.log(Number.isInteger(num2));
console.log(Number.isNaN('texto' * num1));

const calc = (0.7 * 100 + 0.1 * 100) / 100;
console.log(calc);
