// What await does: await pauses an async function until a Promise finishes

// Example
// let result = await somePromise;
// means: "Wait for the Promise to finish, then store its result."
// await only works inside async functions.

// await says: "Pause THIS function here until the Promise finishes."
// NOT: "Pause the entire JavaScript program."

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received!");
        }, 2000);

    });

}

// This Promise:
// waits 2 seconds
// then succeeds

// without await:
// getData().then((result) => {
//     console.log(result);
// });

// with await:
async function run() {

    const result = await getData();

    console.log(result);

}

run();

// What happens
// 1. run() starts
// 2. await pauses run()
// 3. Promise still runs in background
// 4. 2 seconds later: Promise resolves
// 5. await receives result
// 6. console.log runs

// NOTE: await does not freeze the whole program.
// It only pauses:
// that async function
// JavaScript can still:
// run other code
// handle clicks
// run timers
// process requests


// You should usually use await:
// when you need the result before continuing
// Example
// const user = await getUser();
// console.log(user.name);

// You need the user first before printing the name.
// So await makes sense.

