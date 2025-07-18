/**
 * Exibe informações pessoais formatadas, incluindo nome, idade, peso, altura, IMC e ano de nascimento.
 *
 * Variáveis:
 * @const {string} firstName - Primeiro nome da pessoa.
 * @const {string} lastName - Sobrenome da pessoa.
 * @const {number} age - Idade da pessoa em anos.
 * @const {number} height - Altura da pessoa em metros.
 * @const {number} weight - Peso da pessoa em quilogramas.
 * @let {number} imc - Índice de Massa Corporal calculado.
 * @let {number} birthYear - Ano de nascimento calculado.
 *
 * O console exibirá uma mensagem com todas essas informações formatadas em português.
 */
const firstName = 'Maria';
const lastName = 'Silva';
const age = 24;
const height = 1.65;
const weight = 60;
let imc = weight / (height * height);
let birthYear = 2025 - age;

console.log(
  `Seu nome é ${firstName} ${lastName} tem ${age} anos, pesa ${weight} kg\ntem ${height} de altura e seu IMC é ${imc}. Seu ano de nascimento é ${birthYear}.`,
);
