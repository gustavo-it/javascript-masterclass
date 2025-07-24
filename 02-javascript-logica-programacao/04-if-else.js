/**
 * Verifica a idade e imprime se o usuário é maior de idade ou menor de idade.
 * Também verifica a hora do dia e imprime uma saudação apropriada em português.
 *
 * @constant {number} age - Idade do usuário.
 * @constant {number} hours - Hora atual do dia (formato 24h).
 *
 * Se age >= 18, imprime 'Você é maior de idade.', senão imprime 'Você é menor de idade.'.
 * Se hours <= 12, imprime 'Bom dia!'.
 * Se hours <= 18, imprime 'Boa tarde!'.
 * Caso contrário, imprime 'Boa noite!'.
 */
const age = 30;
const hours = 14;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

if (hours <= 12) {
  console.log('Good morning!');
} else if (hours <= 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening!');
}
