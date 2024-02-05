// 1. Declare a `let` variable inside a loop and try accessing it outside the loop.
// Answer:

{
  for (;;) {
    let someVariable = "Some value !";
    break;
  }
  console.log("🚀 ~ someVariable:", someVariable); // Should Error
}

// 2. Create a `const` object and attempt to change it and its properties.
// Answer:

{
  const awsomeObject = {
    awesomeness: 10,
  };

  awsomeObject.unexistingProperty = "Some value"; // Will not error, awsomeObject will have : { awesomeness: 10, unexistingProperty: "Some value" };
  console.log("🚀 ~ awsomeObject:", awsomeObject);
  awsomeObject = new Object({ distangueshedProp: "I'm not the same" }); // Should Error
  console.log("🚀 ~ awsomeObject:", awsomeObject);
}
