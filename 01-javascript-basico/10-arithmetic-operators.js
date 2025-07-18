/* 
Operadores aritméticos
+ Adição ou Concatenação
- Subtração
* Multiplicação
** Potenciação
/ Divisão
% Módulo (Resto da Divisão)

Precedência:
1. ()
2. ** (Potenciação)
3. * / %
4. + -

Incremento e Decremento:
++ Incremento (aumenta 1)
-- Decremento (diminui 1)
++a (pré-incremento) e a++ (pós-incremento)
--a (pré-decremento) e a-- (pós-decremento)
++a é executado antes da expressão, enquanto a++ é executado depois.

Atribuição:
= Atribuição simples
+= Atribuição com adição
-= Atribuição com subtração
*= Atribuição com multiplicação
**= Atribuição com potenciação
/= Atribuição com divisão
%= Atribuição com módulo
*/

const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 % num2);

const firstName = 'Maria';
const lastName = ' Silva';
console.log(firstName + lastName);

let count = 0;
console.log(count++); // Exibe 0, depois incrementa para 1
console.log(++count); // Incrementa para 2, depois exibe 2
console.log(count--); // Exibe 2, depois decrementa para 1
console.log(--count); // Decrementa para 0, depois exibe 0

count += 2; // Adiciona 2, count agora é 2
count -= 1; // Subtrai 1, count agora é 1
count *= 3; // Multiplica por 3, count agora é 3
count **= 2; // Eleva ao quadrado, count agora é 9
count /= 3; // Divide por 3, count agora é 3
count %= 2; // Módulo 2, count agora é 1
console.log(count); // Exibe 1

console.log(5 * 'asdasd'); // NaN (Not a Number)
console.log(5 * '5'); // 25 (string convertida para número)
console.log(5 + '5'); // '55' (concatenação de string)

const num3 = parseInt('5'); // Converte string para número inteiro
const num4 = parseFloat('5.2'); // Converte string para número de pontoflutuante
console.log(num3); // 5
console.log(num4); // 5.2
const num5 = Number('5.2'); // Converte string para número
console.log(num5); // 5.2
