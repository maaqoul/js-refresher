import { subtract, sum, pow, multiply } from "./math.js";

const fun = () => {
  console.log("🚀 ~ fun ~ sum(1,2):", sum(1, 2)); // 3
  console.log("🚀 ~ fun ~ subtract(3,2):", subtract(3, 2)); // 1
  console.log("🚀 ~ fun ~ pow(4,2):", pow(4, 2)); // 6
  console.log("🚀 ~ fun ~ multiply(5,2):", multiply(5, 2)); // 10
};

fun();
