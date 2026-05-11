const myPromise = new Promise((resolve, reject) => {

    reject("Something went wrong!");

});

myPromise.catch((error) => {
    console.log(error);
});

// 1. Promise created
// 2. reject() called
// 3. Promise becomes rejected
// 4. .catch() runs
// 5. prints error