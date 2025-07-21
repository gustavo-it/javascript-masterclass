/**
 * Representa uma pessoa com nome, sobrenome e idade.
 * @typedef {Object} Person
 * @property {string} firstName - O primeiro nome da pessoa.
 * @property {string} lastName - O sobrenome da pessoa.
 * @property {number} age - A idade da pessoa.
 */

/**
 * Cria um novo objeto Person.
 * @param {string} firstName - O primeiro nome da pessoa.
 * @param {string} lastName - O sobrenome da pessoa.
 * @param {number} age - A idade da pessoa.
 * @returns {Person} Um novo objeto pessoa.
 */

/**
 * Representa uma pessoa com métodos.
 * @typedef {Object} PersonWithTalk
 * @property {string} firstName - O primeiro nome da pessoa.
 * @property {number} age - A idade da pessoa.
 * @property {function(): string} talk - Retorna uma saudação com o nome da pessoa.
 */
const person = {
  firstName: 'Maria',
  lastName: 'Silva',
  age: 24,
};

console.log(person);
console.log(person.firstName);
console.log(person['lastName']);
console.log(person.age);

const createPerson = (firstName, lastName, age) => {
  return { firstName, lastName, age };
};

const person2 = createPerson('João', 'Oliveira', 30);
const person3 = createPerson('Ana', 'Souza', 28);
console.log(person2);
console.log(person3);

const person4 = {
  firstName: 'Maria',
  age: 24,

  talk() {
    return `Hello, my name is ${this.firstName}`;
  },
};

console.log(person4.talk());
