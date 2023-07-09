//Assignment 01
function destructureExample(object, array) {
  const { name, age } = object;
  const [val0, , val2] = array;

  return { name, age, val0, val2 };
}

const person = { name: "Zahidul", age: 30, city: "Chittagong" };
const numbers = [16, 21, 25, 31, 45];

const Exampleresult = destructureExample(person, numbers);
console.log(Exampleresult);

//Assignment 02
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const sumresult = sumNumbers(1, 2, 3, 4, 5);
console.log(sumresult);

//Assignment 03
function createGreeting(name) {
  return `Hello, ${name}! Welcome to Ostad Platform.`;
}
const greeting = createGreeting("Zahidul Kabir");
console.log(greeting);
//Assignment 04
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
const evenresult = isEven(4);
const oddresult = isEven(1);
console.log(evenresult);
console.log(oddresult);
//Assignment 05
const multiply = (a, b) => a * b;
const Mulresult = multiply(15, 10);
console.log(Mulresult);
//Assignment 06
function getLargestNumber(a, b) {
  return a > b ? a : b;
}
const result = getLargestNumber(9, 10);
console.log(result);
//Assignment 07
function getAddressCity(address) {
  return address?.city || "Unknown";
}
const address1 = { street: "H-457", city: "Chittagong", country: "Bangladesh" };
const address2 = { street: "Chotopul", country: "Bangladesh" };

const city1 = getAddressCity(address1);
console.log(city1);

const city2 = getAddressCity(address2);
console.log(city2);
//Assignment 08
function doubleNumbers(dnumbers) {
  return dnumbers.map((number) => number * 2);
}
const dnumbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(dnumbers);
console.log(doubledNumbers);
//Assignment 09
function filterEvenNumbers(fnumbers) {
  return fnumbers.filter((number) => number % 2 === 0);
}
const fnumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(fnumbers);
console.log(evenNumbers);
//Assignment 10
function sumArray(anumbers) {
  return anumbers.reduce((sum, number) => sum + number, 0);
}
const anumbers = [1, 2, 3, 4, 5];
const sum = sumArray(anumbers);
console.log(sum);
//Assignment 11
function sortNumbers(snumbers) {
  return snumbers.sort((a, b) => a - b);
}
const snumbers = [3, 1, 4, 2, 5];
const sortedNumbers = sortNumbers(snumbers);
console.log(sortedNumbers);
