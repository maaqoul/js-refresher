// 1. Convert a traditional function expression to an arrow function.
// Answer:

{
  function add(a, b) {
    return a + b;
  }
  console.log("🚀 ~ add ~ add(1, 2):", add(1, 2)); // 3
}

{
  const add = (a, b) => a + b;
  console.log("🚀 ~ add ~ add(1, 2):", add(1, 2)); // 3
}

// 2. Use an arrow function in a `.map()` method to create a new array with the lengths of each element from the original array.
// Answer:

{
  const fruits = ["apple", "banana", "cherry", "avocado"];
  const lengths = fruits.map((fruit) => fruit.length); // [ 5, 6, 6, 7 ]
  console.log("🚀 ~ lengths:", lengths);
}
