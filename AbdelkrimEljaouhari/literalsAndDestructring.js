const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
const greeting = `Hello ${firstName} ${lastName} I hope you are doing so well`;
console.log(greeting); //Hello John Doe I hope you are doing so well

// Array destucturing
const numbers = [1, 2, 3, 4, 5];
const [a, , , , b] = numbers;
console.log(a); // 1
console.log(b); // 5

console.log(`The Subtraction of b and a is ${b - a}.`); //The Subtraction of b and a is 4.
