/**
 * Demonstra operações básicas com arrays em JavaScript, incluindo:
 * - Criação de array de estudantes
 * - Acesso e modificação de elementos
 * - Adição e remoção de elementos no início e fim do array
 * - Exclusão de elementos usando `delete`
 * - Uso dos métodos `slice` e verificação de instância de Array
 */
const students = ['Maria', 'Luiza'];

console.log(students);  // Exibe o array completo
console.log(students[0]); // Acessa o primeiro elemento

students[0] = 'João'; // Modifica o primeiro elemento
console.log(students);
console.log(students.length); // Exibe o tamanho do array

students.push('Carmen'); // Adiciona um novo elemento ao final do array
console.log(students);

students.unshift('Lúcia'); // Adiciona um novo elemento ao início do array
console.log(students);

students.pop(); // Remove o último elemento do array
console.log(students);

students.shift(); // Remove o primeiro elemento do array
console.log(students);

students.push('Vera');
delete students[2]; // Remove o elemento na posição 2, mas mantém o índice
console.log(students);

// Traduza para o português
console.log(students.slice(0, 1)); // Exibe os elementos do índice 0 ao 1 (não inclui o 1)
console.log(students instanceof Array); // Verifica se `students` é uma instância de Array
