const fs = require('fs');
// This imports Node’s file System module

fs.readFile('example.txt', 'utf8', (err, data)=>{
    if (err){
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});
// line 4 tells node to read this file for me and do it asynchronously 
// this means node starts reading file and program continues running
// callbacks run later when file is ready
// example.txt is the file to read
// utf8 is the encoding  which converts bytes into readable text
// (err, data) => { is the callback function
// a callback is a function passed into another function to run later
// notes-2.txt has an example of this
// So when javascript sees fs.readFile(...), node says "I'll read this file in the background"
// javascript continues running and does not wait
// when file finishes reading, it runs the callback: (err, data) => {
// node callbacks usually follow this pattern: (err, result) 
// if something goes wrong: if (err){ 
// then console.error(...) runs
// If everything succeeds err becomes: null
// and data contains the file contents