// Default Parameters
function sayName(name = 'Man') {
    console.log(`Hello ${name}!`);
}
sayName('Abdo'); // Outputs: Hello, John!
sayName(); // Outputs: Hello, Guest!


// Rest Operator
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(1,5,10,20,30));


// Spread Operator
const x = [1,2,3,4,9];
const y = [5,6,7,8];
const a = [...x, ...y];
console.log(a);