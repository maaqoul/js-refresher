// Default Parameters
function car(name = 'bmw') {
    console.log(`this car is, ${name}!`);
}
car('audi');
car();

// Rest Operator
function subtraction(...numbers) {
    return numbers.reduce((prev, curr) => prev - curr, 0);
}
console.log(subtraction(1, 2, 3, 4)); // Outputs: -10

// Spread Operator
const countries1 = ['Norway', 'UK', 'USA'];
const countries2 = ['Morocco', 'Vietnam', 'Brazil'];
const allCountries = [...countries1, ...countries2];
console.log(allCountries); 