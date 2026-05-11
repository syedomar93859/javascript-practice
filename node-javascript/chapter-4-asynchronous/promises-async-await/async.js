Example
async function hello() {
    return "Hello!";
}

hello().then(console.log);

// Looks like it returns a string…
// BUT JavaScript secretly converts it to:
// function hello() {
//     return Promise.resolve("Hello!");
// }

// So doing hello() in the above code
// actually returns: a Promise, not a plain string.
// Output: Hello!


