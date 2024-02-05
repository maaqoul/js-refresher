const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;

const message = `Hello ${firstName},
your last name is ${lastName}`;

console.log(message);


const numberArray = [1,2,3,4,5];

const [a ,_,c] = numberArray;

const secondMessage = `you have choosen :
${a} and ${c} number from the array`;

console.log(secondMessage);