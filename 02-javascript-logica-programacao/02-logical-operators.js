/* 
Operadores Lógicos

&& - E lógico (retorna true se ambos forem true)
|| - Ou lógico (retorna true se pelo menos um for true)
! - Não lógico (inverte o valor booleano)

*/

const a = true;
const b = false;

console.log(a && a); // true
console.log(a && b); // false
console.log(b || a); // true
console.log(b || b); // false
console.log(!a); // false
console.log(!b); // true
