// Object destructuring
const car = { color: 'black', power: 761 };
const { color, power } = car;
const message = `this ${color} couelur car has ${power} hp of power`
console.log(message); 

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [a, ,c] = numbers;
console.log(`the numbers stored are : ${a} and ${c} `); // Outputs: red