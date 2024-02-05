
//exercice 1 Destructuring Assignments
const person = { firstName: 'ibrahim', lastName: 'amara' };

const { firstName, lastName } = person;

console.log('firstName : ' + firstName); //console : firstName : ibrahim
console.log('lastName : ' + lastName); //console : lastName : amara

//exercice 2

const Array = [1, 2, 3, 4, 5];

const [a, , , ,c] = Array;

console.log(a); // Console 1
console.log(c); // console: 5



