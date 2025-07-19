/**
 * Solicita ao usuário um número, exibe o número selecionado e mostra várias operações matemáticas:
 * - Raiz quadrada do número
 * - Verifica se o valor é NaN
 * - Arredonda para baixo
 * - Arredonda para cima
 * - Formata com duas casas decimais
 *
 * Os resultados são exibidos em elementos HTML com os IDs 'title-number' e 'text'.
 */
const number = Number(prompt('Digite um número:'));
const span = document.getElementById('title-number');
const text = document.getElementById('text');

span.innerHTML = `Seu número é ${number}`;
text.innerHTML = `Raiz quadrada: ${Math.sqrt(number)} <br />`;
text.innerHTML += `${number} é NaN: ${Number.isNaN(number)} <br />`;
text.innerHTML += `Arredondado para baixo: ${Math.floor(number)} <br />`;
text.innerHTML += `Arredondo para cima: ${Math.ceil(number)} <br />`;
text.innerHTML += `Com duas casas decimais: ${number.toFixed(2)} <br />`;
