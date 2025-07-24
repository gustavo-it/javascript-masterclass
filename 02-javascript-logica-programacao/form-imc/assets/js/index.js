const form = document.querySelector('.form');
const results = [
  'Abaixo do peso',
  'Peso normal',
  'Sobrepeso',
  'Obesidade grau 1',
  'Obesidade grau 2',
  'Obesidade grau 3',
];

const calcImc = () => {
  const weight = Number(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value);
  if (isNaN(weight) || isNaN(height)) return null;
  const result = weight / (height * height);
  return parseFloat(result.toFixed(2));
};

const createP = () => {
  const p = document.createElement('p');
  return p;
};

const p = createP();

const addResult = (message) => {
  const div = document.querySelector('.result');
  div.innerHTML = '';
  p.innerHTML = `${message}`;
  return div.appendChild(p);
};

const addClass = (isValid) => {
  if (isValid) {
    p.classList.remove('bad');
    p.classList.add('paragraph-result');
  } else if (!isValid) {
    p.classList.remove('paragraph-result');
    p.classList.add('bad');
  }
};

const setMessage = () => {
  const imc = calcImc();
  let message = `Seu IMC é ${imc}`;
  if (imc === null) {
    addClass(false);
    return `Digite valores válidos`;
  }
  if (imc < 18.5) {
    clearFields();
    addClass(true);
    return message + ` ${results[0]}`;
  }
  if (imc > 18.5 && imc <= 24.9) {
    clearFields();
    addClass(true);
    return message + ` ${results[1]}`;
  }
  if (imc >= 25 && imc <= 29.9) {
    clearFields();
    addClass(true);
    return message + ` ${results[2]}`;
  }
  if (imc >= 30 && imc <= 34.9) {
    clearFields();
    addClass(true);
    return message + ` ${results[3]}`;
  }
  if (imc >= 35 && imc <= 39.9) {
    clearFields();
    addClass(true);
    return message + ` ${results[4]}`;
  }
  if (imc >= 40) {
    clearFields();
    addClass(true);
    return message + ` ${results[5]}`;
  }
};

const clearFields = () => {
  document.querySelector('.weight').value = '';
  document.querySelector('.height').value = '';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addResult(setMessage());
});
