// 1. Create a simple promise that resolves with a string "Hello, Promises!" after a 2-second delay and then log it to the console using `.then()`.
// Answer:

{
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Promises!");
    }, 2000);
  });

  promise.then((result) => {
    console.log("🚀 ~ promise.then ~ result:", result);
  });
}

// 2. Write an async function that awaits the resolution of a promise from Exercise 1 and logs the result to the console.

{
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Promises!");
    }, 2000);
  });

  const fun = async (promise) => {
    try {
      const result = await promise;
      console.log("🚀 ~ fun ~ result:", result);
    } catch (error) {}
  };

  fun(promise);
}
