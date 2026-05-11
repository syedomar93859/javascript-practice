const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Task succeeded!");
    } else {
        reject("Task failed!");
    }

});

// instead of freezing the whole program, Promises let JavaScript continue running while waiting for the result

// Example without asynchronous behavior
// This is easy:
// let x = 5 + 3;
// console.log(x);
// The result exists immediately.

// But what about this situation
// Download data from Google
// That could take:
// milliseconds
// seconds
// fail entirely

// JavaScript needs a way to represent "a future result"
// That is what a Promise is for.