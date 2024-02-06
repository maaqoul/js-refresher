function getYourNameBack(name = "Jack") {
  return `Hi your name is ${name}`;
}
console.log(getYourNameBack("karim")); //Hi your name is karim  / without providing the argument the name would be Jack

function sum(...numbers) {
  // this is the rest operator
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
console.log(sum(1, 2, 3)); // returns 6

//
function totalofArrays(...args) {
  let total = 0;
  const newArr = [...args[0], ...args[1]]; //this is the spread operator
  newArr.forEach((num) => (total += num));
  return total;
}

console.log(totalofArrays([1, 2], [3, 6])); // returns 12
