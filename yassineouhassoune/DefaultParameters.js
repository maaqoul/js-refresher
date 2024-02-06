{
    //Q1
    function greet(name = 'Guest') {
        console.log(`Hello, ${name}!`);
    }
    
    greet('John'); // Hello John!
    greet(); // Hello, Guest!

    //Q2
    function sum(...numbers) {
        return numbers.reduce((prev, curr) => prev + curr, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10

    //Q3
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];

    console.log(combined); // [1, 2, 3, 4, 5, 6]

    
    
}