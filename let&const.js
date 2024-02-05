// 1- Declare a let inside a loop and try accessing it outside the loop
const arr = [0, 1, 2, 3, 4];
for(let i=0; i < arr.length; i++) {
    let insideTheLoop = i;
   console.log("a call inside the loop", insideTheLoop)
}
// This will result in an error
// Uncaught ReferenceError: insideLoop is not defined
console.log("a call outside the loop", insideTheLoop)


// 2 - Create a const object and attempt to change it and its properties.
const myConstObject = {
    property1: 'one',
    property2: 'two'
};

// Modifying properties of the const object is allowed
myConstObject.property1 = 'three';
myConstObject.property3 = 'four'; // Adding a new property is allowed

console.log(myConstObject);