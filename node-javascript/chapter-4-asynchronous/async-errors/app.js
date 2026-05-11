// This is showing how errors work inside async functions 
// and how async functions automatically turn thrown errors into rejected Promises

async function fetchDataWithError(){
    throw new Error("Something went wrong!");
}
// This creates an async function.
// Because of async, this function always returns a Promise even if we do not manually create one.
// line 5  creates and throws an Error object.
// new Error(...) creates an Error object containing: error message, stack trace, debugging information

// Example: new Error("Something went wrong!")
// creates something like:
// Error object
//     message = "Something went wrong!"
// throw means "Stop execution and raise an error."
// Inside an async function, throw new Error(...) automatically becomes return Promise.reject(new Error(...))

fetchDataWithError()
    .then(result=> console.log(result))
    .catch(error => console.log(error.message));
// line 19 calls the async function.
// Because it is async, it immediately returns a Promise
// But this Promise is rejected because of the thrown error

// Then:
// .then(result => console.log(result))
// .then() only runs when the Promise succeeds
// But the Promise failed.
// So .then() is skipped

// .catch(error => console.log(error.message));
// .catch() handles rejected Promises/errors
// The parameter error contains the Error object
// error.message extracts "Something went wrong!"
