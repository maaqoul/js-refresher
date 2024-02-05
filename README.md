# js-refresher

# ES6 (ECMAScript 2015) Tutorial

## Introduction
- Brief overview of ES6 and its importance.
- The evolution of JavaScript and the introduction of ES6.

## New Syntax in ES6
### let and const
- Explanation of block scope and how `let` and `const` differ from `var`.
### Arrow Functions
- Syntax of arrow functions and how they differ from traditional functions.
### Template Literals
- Using backticks for multi-line strings and embedding expressions.

## Enhanced Object Properties
### Property Shorthand
- Simplifying object property definition when the property name matches the variable name.
### Computed Property Names
- Dynamically naming properties using square bracket notation.
### Method Properties
- Shorter syntax for defining methods on objects.

## Destructuring
- Destructuring arrays and objects for easier data access.

## Default, Rest, and Spread
### Default Parameters
- Setting default values for function parameters.
### Rest Parameter
- Handling an indefinite number of parameters.
### Spread Operator
- Expanding arrays or objects where multiple parameters or elements are expected.

## ES6 Modules
- Overview of import and export syntax for modularizing JavaScript code.

## Classes in ES6
- Syntax for defining classes, constructors, and inheritance.

## Promises
- Handling asynchronous operations with Promises.

## Generators and Iterators
- Functionality and use cases of generators and iterators.

## New Built-In Methods
- Overview of new methods for arrays, objects, and other built-ins.

## Sets and Maps
- Introduction to Set and Map data structures and their use cases.

## Conclusion
- Recap of the key features of ES6.
- Encouragement to practice and explore more about ES6.


# ES6 Tutorial - "let and const"

## Introduction
`let` and `const` introduce block-scoped variable declarations in JavaScript ES6, providing more control over variable lifecycles and immutability compared to `var`.

## Detailed Explanation
- `let` allows you to declare variables limited to the scope of a block statement, or expression, differing from `var` which is function-scoped.
- `const` is used to declare variables meant to remain constant throughout their lifecycle, offering an immutable variable declaration except for properties of objects.

## Example
```javascript
// Example of `let`
let greeting = "Hello, world!";
if (true) {
    let greeting = "Hello, ES6!";
    console.log(greeting); // Outputs: "Hello, ES6!"
}
console.log(greeting); // Outputs: "Hello, world!"

// Example of `const`
const pi = 3.14;
console.log(pi); // Outputs: 3.14
// pi = 3.14159; // This line will throw an error because `const` values cannot be changed.
```

This example demonstrates how `let` allows you to declare variables with block scope, which means the variable `greeting` declared inside the if block is different from the one outside it. The `const` example shows how a constant is defined and that attempting to change its value results in an error.


## Best Practices
Use `let` for variables that will change over time, and `const` for variables which you expect to remain constant.

## Exercises
1. Declare a `let` variable inside a loop and try accessing it outside the loop.
2. Create a `const` object and attempt to change it and its properties.

# ES6 Tutorial - "Arrow Functions"

## Introduction
Arrow functions provide a concise syntax for writing functions in ES6. They are syntactically shorter than traditional function expressions and lexically bind the `this` value.

## Detailed Explanation
Arrow functions allow for shorter function syntax and do not have their own `this`, `arguments`, `super`, or `new.target`. These functions are best suited for non-method functions.

## Example
```javascript
// Traditional function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // Outputs: 5

// Arrow function equivalent
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // Outputs: 5

// Arrow function with `.map()`
const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number);
console.log(squares); // Outputs: [1, 4, 9, 16]
```

This example showcases the concise syntax of arrow functions compared to traditional function expressions and demonstrates their use in array manipulation with `.map()`.


## Best Practices
- Use arrow functions for simple function expressions and when you need to preserve the lexical `this` context.
- Avoid using arrow functions as methods in objects if you need to access the object's properties via `this`.

## Exercises
1. Convert a traditional function expression to an arrow function.
2. Use an arrow function in a `.map()` method to create a new array with the lengths of each element from the original array.

# ES6 Tutorial - "Template Literals"

## Introduction
Template Literals in ES6 offer more powerful strings, including embedded expressions, multi-line strings, and improved readability for string concatenation.

## Detailed Explanation
Use backticks (\`) for Template Literals and `${}` for embedding expressions. This syntax simplifies incorporating variables and expressions within strings.

## Example
```javascript
// Multi-line string
let multiLineString = `This is an example of
a multi-line string using
template literals.`;

console.log(multiLineString);

// Embedding expressions
let a = 5;
let b = 10;
console.log(`The sum of a and b is ${a + b}.`);
```

This example illustrates the use of Template Literals for creating multi-line strings without needing to use newline characters or concatenation. It also demonstrates embedding expressions within a string, providing a powerful tool for dynamic string creation in JavaScript ES6.


## Best Practices
- Prefer Template Literals for dynamic string creation.
- Utilize them for multi-line strings and embedding expressions.

## Exercises
1. Craft a Template Literal that embeds variables in a greeting.
2. Format a multi-line string using Template Literals.

# ES6 Tutorial - "Destructuring Assignments"

## Introduction
Destructuring assignments in ES6 simplify the extraction of values from arrays or properties from objects into separate variables, enhancing code clarity and reducing boilerplate.

## Detailed Explanation
Destructuring allows unpacking values from arrays or properties from objects directly into variables through a syntax that mirrors the construction of array and object literals.

## Example
```javascript
// Object destructuring
const person = { name: 'John Doe', age: 30 };
const { name, age } = person;
console.log(name); // Outputs: John Doe
console.log(age); // Outputs: 30

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, , thirdColor] = colors;
console.log(firstColor); // Outputs: red
console.log(thirdColor); // Outputs: blue
```

This example showcases how to use destructuring to easily extract values from objects and arrays, improving code readability and efficiency.


## Best Practices
- Utilize destructuring for more readable and concise code, especially when dealing with complex data structures.
- Use object destructuring to extract multiple properties from an object with a single statement.
- Apply array destructuring for swapping values or efficiently handling multiple return values from a function.

## Exercises
1. Given an object `{ firstName: 'John', lastName: 'Doe' }`, use destructuring to assign its properties to two variables `firstName` and `lastName`.
2. Given an array `[1, 2, 3, 4, 5]`, use array destructuring to assign the first and third elements to variables `a` and `c`.

# ES6 Tutorial - "Default Parameters, Rest, and Spread Operators"

## Introduction
This section covers three powerful features in ES6 that enhance function definitions and calls: Default Parameters for setting default values, the Rest Operator for handling indefinite arguments, and the Spread Operator for expanding iterables.

## Detailed Explanation
- **Default Parameters** allow functions to have default values for parameters if no value or `undefined` is passed.
- **Rest Operator** (`...`) enables functions to accept an indefinite number of arguments as an array.
- **Spread Operator** (`...`) allows arrays, objects, and iterables to be expanded into individual elements or properties.

## Example
```javascript
// Default Parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet('John'); // Outputs: Hello, John!
greet(); // Outputs: Hello, Guest!

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
```

These examples illustrate how default parameters prevent `undefined` values in functions, the rest operator gathers arguments into an array, and the spread operator expands collections into individual elements.


## Best Practices
- Use Default Parameters to avoid undefined values in function parameters.
- Apply the Rest Operator for functions that accept a variable number of arguments.
- Use the Spread Operator to combine arrays or objects, or when applying functions.

## Exercises
1. Create a function with a default parameter and demonstrate how it works when the argument is not provided.
2. Use the Rest Operator to create a function that calculates the sum of an indefinite number of arguments.
3. Demonstrate how to use the Spread Operator to merge two arrays into one.

# ES6 Tutorial - "ES6 Modules"

## Introduction
ES6 Modules bring an official standard for JavaScript modularization, allowing you to break up your code into separate files, which can then be imported or exported for use in other modules. This enhances code organization, maintenance, and reusability.

## Detailed Explanation
- **Export**: You can export functions, objects, or primitives from a module so they can be used in other scripts.
- **Import**: Allows you to bring in exports from other modules into the current module.

## Example
// In file: mathFunctions.js
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
// In file: app.js
```javascript
import { add, subtract } from './mathFunctions.js';

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 3)); // Outputs: 2
```

This example demonstrates creating a module that exports functions and then importing those functions in another file to use them.

## Best Practices
- Keep modules focused on a single responsibility.
- Use named exports for static module structure and easier refactoring.
- Prefer importing only what you need to keep the bundle size small.

## Exercises
1. Create two modules: one for exporting functions and another one for importing them.
2. Use named exports to export multiple functions from a module and then import them individually in another file.

# ES6 Tutorial - "Classes in ES6"

## Introduction
ES6 introduces classes as a syntactical sugar over JavaScript's existing prototype-based inheritance, making it easier to create and manage objects.

## Detailed Explanation
Classes in ES6 provide a clearer and more concise syntax for creating objects and handling inheritance. They support constructor functions, methods, and inheritance.

## Example
```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method to calculate area
  calculateArea() {
    return this.height * this.width;
  }
}

// Using the Rectangle class
const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.calculateArea()); // Outputs: 50

// Extending Rectangle to create Square
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

// Using the Square class
const mySquare = new Square(5);
console.log(mySquare.calculateArea()); // Outputs: 25
```
This example shows how to define a class, create an instance, use a method, and implement inheritance in ES6.

## Best Practices
- Use classes to encapsulate and manage related data and behavior.
- Utilize `extends` for inheritance to promote code reuse.

## Exercises
1. Define a class `Rectangle` with properties `width` and `height` and a method to calculate its area.
2. Extend the `Rectangle` class to create a `Square` class, reusing the area calculation logic but ensuring the width and height are always equal.
3. 

