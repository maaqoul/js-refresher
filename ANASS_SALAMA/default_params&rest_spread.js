//1- Create a function with a default parameter and demonstrate how it works when the argument is not provided
const greet = (name = 'Unknown') => {
    console.log(`Hello, ${name}!`);
};
greet(); // Output: Hello, Unknown!
greet('John'); // Output: Hello, John!

//2- Use the Rest Operator to create a function that calculates the sum of an indefinite number of arguments
const calSum = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};
const sum = calculateSum(1, 2, 3, 4, 5);
console.log(sum); // Output: 15

//3- Demonstrate how to use the Spread Operator to merge two arrays into one
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(mergedArray);// Output: [1, 2, 3, 4, 5, 6]