// 1. Craft a Template Literal that embeds variables in a greeting.
// 2. Format a multi-line string using Template Literals.
// 1. Given an object `{ firstName: 'John', lastName: 'Doe' }`, use destructuring to assign its properties to two variables `firstName` and `lastName`.
// Answer:

{
  const obj = { firstName: "John", lastName: "Doe" };
  const { firstName, lastName } = obj;
  const greetings = `Hello Mr ${firstName} ${lastName} 😄👋`; // Hello Mr John Doe 😄👋
  console.log("🚀 ~ greetings:", greetings);
}

// 2. Given an array `[1, 2, 3, 4, 5]`, use array destructuring to assign the first and third elements to variables `a` and `c`.
// Answer
{
  const arr = [1, 2, 3, 4, 5];
  const [first, , third] = arr;
  console.log("🚀 ~ first: %d third: %d", first, third); // first: 1 third: 3
}
