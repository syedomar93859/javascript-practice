// Synchronous means:
// do one thing at a time in order

// Example:
// console.log("A");
// console.log("B");
// console.log("C");

// Output:
// A
// B
// C

// Each line waits for the previous one.


// Asynchronous means:
// start something that may take time
// continue doing other work meanwhile

// Instead of waiting/blocking.

// Synchronous at a restaurant:
// wait for food before doing anything else

// Asynchronous at a restaurant:
// order food
// continue talking
// food arrives later


function fetchData(callback){
    setTimeout(() =>{
        console.log("Data fetched successfully!");
        callback();
    }, 2000);

}
// the setTimeout(() => { schedules the code to 2 seconds later because of 2000(2000 milliseconds = 2 seconds)
// setTimeout is asynchronous which means it does not pause the program and instead schedules the tasks and then continues execution
// after 2 seconds, line 34 and line 35 runs
// callback() means processData() because we passed fetchData(processData)

function processData(){
    console.log("Processing data...");
}
// so "Processing data..." is finally printed

fetchData(processData);
// this calls fetchData(callback) where callback = processData