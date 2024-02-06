// 1. Use `Array.find` to locate the first item in an array that meets a specified condition.
// Answer:

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = arr.find((item) => item < 6); // all numbers that are >= 6 should match but only the first one is catched
  console.log("🚀 ~ result:", result); // 1
}

// 2. Create a new string using the `String.includes` method to check if a word is present in a given sentence.
// Answer:

{
  const str = "Hello World!";
  console.log("🚀 ~ str.includes('Hello'):", str.includes("Hello")); // true
  console.log("🚀 ~ str.includes('Hello'):", str.includes("Test")); // false
}
