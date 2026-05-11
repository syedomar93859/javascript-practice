const myPromise = new Promise((resolve, reject) => {
    resolve("Task completed!");
});

myPromise.then((result)=>console.log(result));
