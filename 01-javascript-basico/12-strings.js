/**
 * Manipula e demonstra diversas operações com strings usando métodos nativos do JavaScript.
 *
 * Variáveis:
 * @const {string} text - Texto base utilizado para demonstração dos métodos de string.
 *
 * Métodos Demonstrados:
 * - Acesso por índice e com charAt()
 * - Concatenação de strings
 * - Localização de substrings (indexOf e lastIndexOf)
 * - Substituição de texto (replace com string e regex)
 * - Cálculo do comprimento da string (length)
 * - Extração de substrings (slice)
 * - Divisão da string em array (split)
 * - Transformação de caixa (toUpperCase e toLowerCase)
 *
 * Observações:
 * - charAt(n) e text[n] acessam o caractere na posição n.
 * - indexOf retorna a primeira ocorrência da substring, lastIndexOf a última.
 * - replace pode usar strings ou expressões regulares; o modificador 'g' substitui todas as ocorrências.
 * - slice(início, fim) extrai uma parte da string, fim não é incluído.
 * - split(separador, limite) divide a string em partes, retornando um array.
 */

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
console.log(text[1]);
console.log(text.charAt(1));
console.log(
  text.concat(
    ' Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ),
);
console.log(text.indexOf('ipsum')); // Retorna o índice da primeira ocorrência de 'ipsum'
console.log(text.lastIndexOf('ipsum')); // Retorna o índice da última ocorrência de 'ipsum'
console.log(text.replace('Lorem', 'Hello')); // Substitui 'Lorem' por 'Hello'
console.log(text.replace(/l/, 'x')); // Substitui a primeira ocorrência de 'l' por 'x'
console.log(text.replace(/l/g, 'x')); // Substitui todas as ocorrências de 'l' por 'x'
console.log(text.length); // Retorna o comprimento da string
console.log(text.slice(0, 5)); // Extrai os primeiros 5 caracteres
console.log(text.slice(-5)); // Extrai os últimos 5 caracteres
console.log(text.split(' ')); // Divide a string em um array de palavras
console.log(text.split(' ', 3)); // Divide a string em um array de palavras, limitando a 3 partes
console.log(text.toUpperCase()); // Converte toda a string para maiúsculas
console.log(text.toLowerCase()); // Converte toda a string para minúsculas
