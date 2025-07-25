/**
 * Solicita ao usuário que digite seu nome completo e exibe várias informações sobre o nome na página:
 * - O nome completo digitado.
 * - A quantidade de letras do nome.
 * - A segunda letra do nome.
 * - O primeiro índice da letra "a" no nome.
 * - O último índice da letra "a" no nome.
 * - As últimas três letras do nome.
 * - As palavras que compõem o nome.
 * - O nome em letras maiúsculas.
 * - O nome em letras minúsculas.
 */
const fullName = prompt('Digite seu nome completo: ');
document.body.innerHTML = `O seu nome é: ${fullName} <br />`;
document.body.innerHTML += `O seu nome tem ${fullName.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${fullName[1]} <br />`;
document.body.innerHTML += `O primeiro índice da letra "a" no seu nome é: ${fullName.indexOf(
  'a',
)} <br />`;
document.body.innerHTML += `O último indice da letra "a" no seu nome é: ${fullName.lastIndexOf(
  'a',
)} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${fullName.slice(
  -3,
)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${fullName.split(
  ' ',
)} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${fullName.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${fullName.toLowerCase()} <br />`;
