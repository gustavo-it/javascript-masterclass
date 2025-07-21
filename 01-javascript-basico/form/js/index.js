/**
 * Seleciona o formulário do DOM.
 * @type {HTMLFormElement}
 */

/**
 * Seleciona o elemento de resultado do DOM.
 * @type {HTMLElement}
 */

/**
 * Array para armazenar os dados das pessoas cadastradas.
 * @type {Array<Object>}
 */

/**
 * Obtém os valores dos campos do formulário.
 * @returns {{ name: string, lastName: string, weight: string, height: string }} Objeto com os valores dos campos.
 */

/**
 * Cria um objeto pessoa a partir dos valores do formulário.
 * @param {{ name: string, lastName: string, weight: string, height: string }} object - Valores dos campos do formulário.
 * @returns {{ firstName: string, lastName: string, weight: string, height: string }} Objeto pessoa.
 */

/**
 * Adiciona os dados da pessoa ao elemento de resultado.
 * @param {HTMLElement} element - Elemento onde o resultado será exibido.
 * @returns {string} HTML atualizado do elemento de resultado.
 */

/**
 * Evento de submit do formulário.
 * Previne o comportamento padrão, adiciona a pessoa ao array, exibe o resultado e reseta o formulário.
 * @param {Event} event - Evento de submit do formulário.
 */
const form = document.querySelector('.form'); // Seleciona o formulário do DOM
const result = document.querySelector('.result'); // Seleciona o elemento de resultado do DOM
const persons = []; // Array para armazenar os dados das pessoas cadastradas

const valueFields = () => {
  // Obtém os valores dos campos do formulário
  const name = form.querySelector('.name').value;
  const lastName = form.querySelector('.lastName').value;
  const weight = form.querySelector('.weight').value;
  const height = form.querySelector('.height').value;
  return { name, lastName, weight, height };
};

const person = (object) => {
  // Cria um objeto pessoa a partir dos valores do formulário
  return {
    firstName: object.name,
    lastName: object.lastName,
    weight: object.weight,
    height: object.height,
  };
};

const addResult = (element) => {
  // Adiciona os dados da pessoa ao elemento de resultado
  return (element.innerHTML += `${persons[persons.length - 1].firstName} ${
    persons[persons.length - 1].lastName
  } ${persons[persons.length - 1].weight}
    ${persons[persons.length - 1].height} <br />`);
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do formulário
  const values = valueFields(); // Obtém os valores dos campos
  persons.push(person(values)); // Adiciona a nova pessoa ao array
  addResult(result); // Adiciona os dados da pessoa ao resultado
  form.reset(); // Limpa os campos do formulário
});
