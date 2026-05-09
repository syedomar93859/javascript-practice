// Use synchronous code when:
// You WANT the program to stop and wait

// Use asynchronous code when:
// The task may take time,
// and you don't want to freeze the program

function step1(callback){
    setTimeout(()=>{
        console.log("Step 1 complete");
        callback();

    }, 1000);
}

function step2(callback){
    setTimeout(()=>{
        console.log("Step 2 complete");
        callback();

    }, 1000);
}

function step3(callback){
    setTimeout(()=>{
        console.log("Step 3 complete");
        callback();

    }, 1000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps completed.");
        });
    });
});

// Defining step1:
// function step1(callback){

// This function accepts:
// another function
// That function is the callback.


// Inside step1
// setTimeout(()=>{
// Means:
// "run this code 1 second later"
// After 1 second
// console.log("Step 1 complete");
// prints: Step 1 complete
// Then: callback();
// runs the next step.

// Same thing for step2 and step3

// Each function:
// waits 1 second
// prints completion message
// calls next callback


// This:
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All steps completed.");
//         });
//     });
// });
// is what creates the sequence.

// Read it like this
// Start:
// step1(...)
// means:
// start step1
// When step1 finishes:
// ()=>{
//     step2(...)
// }
// runs.

// When step2 finishes:
// ()=>{
//     step3(...)
// }
// runs.

// When step3 finishes:
// ()=>{
//     console.log("All steps completed.");
// }
// runs.