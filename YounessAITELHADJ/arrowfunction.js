//2. Use an arrow function in a `.map()` method to create a new array with the lengths of each element from the original array.

const fruitsArray = ['apple', 'banana', 'cherry'];

const lengthsArray = fruitsArray.map(fruit => fruit.length);

console.log(lengthsArray);