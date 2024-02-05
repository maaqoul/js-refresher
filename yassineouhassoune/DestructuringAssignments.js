{
//question 1 : Given an object { firstName: 'John', lastName: 'Doe' }, use destructuring to assign its properties to two variables firstName and lastName.
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(`Hello ${firstName} ${lastName}`); //Hello John Doe

//question 2 : Given an array [1, 2, 3, 4, 5], use array destructuring to assign the first and third elements to variables a and c.
const Array = [1, 2, 3, 4, 5];
const [a, , c] = Array;
const difference = a - c;
console.log(`The difference between ${a} and ${c} is ${difference}`); //The difference between 1 and 3 is -2

}