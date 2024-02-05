
//exercice 1
function myName(name = 'test') {
    console.log('salut ' + name);
}

myName(); //console Hello test
myName('ibrahim'); //console salut ibrahim


//exercice 2

function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(8,5)); // console : 13

// exercice 3

const var1 = ['S', 'Q', 'L'];
const var2 = ['I'];
const combined = [...var1, ...var2];
console.log(combined); // console: [ 'S', 'Q', 'L', 'I' ]

