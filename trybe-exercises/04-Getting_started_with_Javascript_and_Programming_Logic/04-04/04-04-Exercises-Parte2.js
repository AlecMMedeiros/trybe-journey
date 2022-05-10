// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
console.log('1 --------------------');
function wordInverter(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
console.log(wordInverter("desenvolvimento"));

console.log('2 --------------------');
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayTeste = [2, 3, 6, 7, 10, 1];

function getBig(array) {
  let bigNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigNumber  ) bigNumber = array[index];
    
  }
  console.log(`O index do maior número é: ${array.indexOf(bigNumber)}`);
}
getBig(arrayTeste);

console.log('3 --------------------');
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function getMin(array) {
  let minNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < minNumber  ) minNumber = array[index];    
  }
  console.log(`O index do maior número é: ${array.indexOf(minNumber)}`);
}
getMin(arrayTeste);

console.log('4 --------------------');
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let arrayWords = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigWord(arrayWord) {
  let bigWord = arrayWord[0];
  for (let values of arrayWord) {
    if (values.length > bigWord.length) bigWord = values;
  }
  console.log(bigWord);
}
bigWord(arrayWords);

console.log('5 --------------------');
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let arrayRepete = [2, 3, 2, 5, 8, 2, 3];

function repetedNumber(arrayNumbers) {
  let objectNumbers = {};
  for (let index = 0; index < arrayNumbers.length; index += 1 ) {
    let count = 0    
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index] === arrayNumbers[index2]) {
        count += 1;
        objectNumbers[arrayNumbers[index]] = count;
      }
    }
  } 
  let max = Math.max(...Object.values(objectNumbers))
  console.log(Object.keys(objectNumbers).find((key) => objectNumbers[key] === max));
}
repetedNumber(arrayRepete)

console.log('6 --------------------');
// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let number = 5;

function brakeAndSum(number) {
  let result= number;
  while (number > 0) {
    number -= 1;
    result = result + number;
  }
  console.log(result);
}
brakeAndSum(number);

console.log('6 --------------------');
//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
let string1 = 'joaofernando';
let string2 = 'fernando';

function verificaFimPalavra(string1, string2) {
  if (string1.lastIndexOf(string2) === string1.length - string2.length) {
    return true;
  }return false;
};

console.log(verificaFimPalavra(string1, string2));
