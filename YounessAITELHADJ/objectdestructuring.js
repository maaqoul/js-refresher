//1. Given an object `{ firstName: 'John', lastName: 'Doe' }`, use destructuring to assign its properties to two variables `firstName` and `lastName`.

const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);


//2. Given an array `[1, 2, 3, 4, 5]`, use array destructuring to assign the first and third elements to variables `a` and `c`.

const numbers = [1, 2, 3, 4, 5];

const [a, , c, , ] = numbers;

console.log(a);
console.log(c);