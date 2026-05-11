// async mainly does this:
// 1. Makes the function return a Promise automatically
// 2. Allows you to use await inside the function
// async function myFunction()
// actually means: "This function returns a Promise." and "You may use await inside."


// The ACTUAL asynchronous work usually comes from things like:
// fetch()
// database calls
// timers (setTimeout)
// file reading
// API requests


// A Promise is  an object representing a future result
// Think of it like:
// "I promise I'll give you a result later."
// The result could:
// succeed
// fail

// Example idea
// Ordering food:
// You place order now
// Restaurant prepares food later
// Eventually:
// food arrives
// or
// order fails

// Promises have 3 states:
// State	    Meaning
// Pending	    still working
// Fulfilled	succeeded
// Rejected	    failed

// Promise.resolve("Success") means:  "The operation completed successfully."
// Promise.reject("Error") means: "The operation failed."

// Promise is a real object/type in JavaScript like:
// arrays
// strings
// objects

// const x = Promise.resolve("hello");
// x is literally a Promise object.

// await is a JavaScript keyword like:
// if
// return
// function
// It has special meaning in the language.


// await somePromise means:
// "Pause this async function
// until the Promise finishes."

// Example
// let data = await Promise.resolve("hello");
// JavaScript waits for the Promise.

// Then:
// data = "hello"
// If the Promise fails
// await Promise.reject("Error")

// then:
// await throws an error
// execution jumps to catch
// NOTE: await ONLY works inside async functions

// Example:
// async function test() {
//     let data = await Promise.resolve("hello");
// }


async function fetchDataSuccess() {
    return "Data fetched!";
}
// async means this function ALWAYS returns a Promise automatically
// Even if you return a plain string.
// Inside the async function we have return "Data fetched!"
// JavaScript actually converts it to: return Promise.resolve("Data fetched!");
// So the function is basically: “a function that returns a Promise that resolves to 'Data fetched!'”

fetchDataSuccess().then(console.log);
// fetchDataSuccess() calls the async function and returns a Promise immediately
// So this becomes: Promise.resolve("Data fetched!")
// then(console.log) means “when the promise finishes, run console.log(result)”
// So: console.log("Data fetched!")

async function fetchDataError() {
    try {
        let data = await Promise.reject("Error occurred!");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// this is another async function, it will return a Promise automatically
// at line 17, “try running this code, and if it fails, go to catch”
// This is how async/await replaces .catch().
// Promise.reject("Error occurred!"): This creates a Promise that immediately fails: Promise.reject("Error occurred!")
// So it is like: “this operation failed instantly”
// await means: “pause here until the promise finishes”
// but since it is a rejection: it jumps directly to catch
// So: let data = ... never executes
// console.log(data); this does not run because: Promise rejected, jumped to catch immediately
// So this line is skipped.
//error: this contains: "Error occurred!"
// console.log(error) prints: Error occurred!

fetchDataError();