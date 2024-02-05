const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Promises!");
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result);
  });

  async function usePromise() {
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Promise processing complete.');
    }
  }

  usePromise();