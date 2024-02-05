// Default Parameters
function calcAge(name = 'Vampire', age = 100) {
    console.log(`Hello ${name}, your age is ${age}!`);
}
calcAge('Katherine', 25); 
calcAge(); 

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(1, 2, 3, 4, 6, 8)); 

// Spread Operator
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const combined = [...arr1, ...arr2];
console.log(combined);