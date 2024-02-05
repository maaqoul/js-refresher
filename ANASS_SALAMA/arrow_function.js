// Use an arrow function in a `.map()` method to create a new array with the lengths of each element from the original array.
const arr1 = ['water', 'cake', ['potato', 'tomato'], 'lolipop'];

const arr2 = arr1.map(element => element.length);

console.log(arr2);