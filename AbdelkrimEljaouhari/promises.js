let promiseLesson = true;
const hello = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (promiseLesson) {
      return resolved("Hello, Promises!");
    }
    return rejected("BYE, Promises!");
  }, 2000);
});

hello.then((msg) => console.log(msg));
