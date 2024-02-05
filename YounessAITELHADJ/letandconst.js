//1. Declare a `let` variable inside a loop and try accessing it outside the loop.

for (let i = 0; i < 3; i++) {
    let myLetVariable  = 25;
    console.log(myLetVariable);
  }

  console.log(myLetVariable);

// 2. Create a `const` object and attempt to change it and its properties.

  const multiplication = {
    a: 2,
    b: 3
  };
  
  multiplication.a = 4;
  multiplication.b = 5;
  
  console.log(multiplication);