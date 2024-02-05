//1. Create a function with a default parameter and demonstrate how it works when the argument is not provided.

function welcome(name = 'User') {
    console.log(`Salam, ${name}!`);
  }
  
  welcome('Youness');
  welcome();

// 2. Use the Rest Operator to create a function that calculates the sum of an indefinite number of arguments.

function sumCalculation(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const sum1 = sumCalculation(9, 8, 7);
  const sum2 = sumCalculation(10, 15, 4, 6, -5);
  
  console.log(sum1, sum2);

//3. Demonstrate how to use the Spread Operator to merge two arrays into one.

const fruits = ['banana', 'apple', 'orange'];
const vegetables = ['carrot', 'potato'];

const mergedArray = [...fruits, ...vegetables];

console.log(mergedArray);