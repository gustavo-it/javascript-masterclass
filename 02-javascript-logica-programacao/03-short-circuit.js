/**
 * Demonstração de operadores de curto-circuito (short-circuit) em JavaScript.
 *
 * Exemplos:
 * - Utilizando o operador lógico OU (||) para retornar o primeiro valor verdadeiro.
 * - Utilizando o operador lógico E (&&) para retornar o primeiro valor falso.
 *
 * Saídas esperadas:
 * console.log(firstName || lastName || true); // 'Gustavo'
 * console.log(false || lastName || 0); // 0
 * console.log(200 && firstName && true); // true
 * console.log(lastName && firstName && 0); // ''
 */
const firstName = 'Gustavo';
const lastName = '';

console.log(firstName || lastName || true); // 'Gustavo'
console.log(false || lastName || 0); // 0

console.log(200 && firstName && true); // true
console.log(lastName && firstName && 0); // ''
