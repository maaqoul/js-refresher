// Object destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const {firstName, lastName} = person;

const message = `hello ${firstName} ${lastName}`;
console.log(message);

const nmb = [1, 2, 3, 4, 5];
const [first,,,,last] = nmb;

console.log(`difference between ${last} and ${first} is ${last - first}`);