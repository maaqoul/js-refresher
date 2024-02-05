// 1. Create a function with a default parameter and demonstrate how it works when the argument is not provided.
// Answer:

{
  const fun = (param = [0]) => param.reduce((acc, curr) => acc + curr, 0);
  console.log("🚀 ~ fun():", fun()); // 0
  console.log("🚀 ~ fun([1, 2, 3]):", fun([1, 2, 3])); // 6
}
// 2. Use the Rest Operator to create a function that calculates the sum of an indefinite number of arguments.
// Answer:

{
  const sum = (...operands) =>
    operands.reduce((acc, operand) => acc + operand, 0);
  console.log("🚀 ~ sum(1):", sum(1)); // 1
  console.log("🚀 ~ sum(1, 2, 3):", sum(1, 2, 3)); // 6
  console.log("🚀 ~ sum(10, 20, 30, 40):", sum(10, 20, 30, 40)); // 100
}
// 3. Demonstrate how to use the Spread Operator to merge two arrays into one.
// Answer:

{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const merge = [...arr1, ...arr2];
  console.log("🚀 ~ merge:", merge);
}
