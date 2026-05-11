const myPromise = new Promise((resolve, reject) => {

    console.log("Starting task...");

    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);

});

myPromise.then((result) => {
    console.log(result);
});

// line 1 creates a promise object
// inside the Promise, JavaScript gives you two special functions automatically: resolve and reject
// resolve means:
// "The operation succeeded."
// reject means:
// "The operation failed."
// setTimeout starts an asynchronous timer meaning "Run this code 2 seconds later."

// After 2 seconds:
// the Promise becomes fulfilled (successful)
// with value: "Task completed!"

// .then() means:  "When the Promise succeeds, run this function."

// result contains: "Task completed!"
// because that is what was passed into: resolve("Task completed!")
