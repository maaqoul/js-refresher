// Q1
{
    for (let i = 0; i < 3; i++) {
        let loopVariable = `Iteration ${i + 1}`;
        console.log(loopVariable);
    }

    // Uncommenting the next line will result in an error
    console.log(loopVariable);
}


//q2
// Create a const object
{
    const person = {
        name: "yassine",
        age: 27,
    };

    // Attempt to change a property of the const object
    // Uncommenting the next line will result in an error
     person.age = 80;

    console.log(person); // Outputs: { name: "yassine", age: 27 }
}


