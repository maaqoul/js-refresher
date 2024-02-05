//1- Declare a let variable inside a loop and try accessing it outside the loop.
let result;
for (let i = 0; i < 3; i++) {
  result = i;
}

// Output: Total: 2
console.log("Total :", result);  



//*2- Create a const object and attempt to change it and its properties.
const constObj = { prop1: "test1", prop2: "test2" };

//* Attempting to change the entire object (will result in an error)
try {
  constObj = { prop3: "test3" };
} catch (error) {
  console.error("Error:", error.message);
}

//* Attempting to change a property of the object (will result in an error)
try {
  constObj.prop1 = "test4";
} catch (error) {
  console.error("Error:", error.message);
}

// Displaying the original object and its modified property
console.log("Original Object:", constObj);
