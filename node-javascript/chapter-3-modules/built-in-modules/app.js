import fs from 'fs';
// Imports Node.js's built-in file system module

fs.readFile('example.txt','utf8',(err, data) => {
    if (err){
        console.log("Error reading file:", err);
        return;
    }
    console.log('File content:', data);
});

// Line 4 says to read the file named example.txt
// fs.readFile calls the readFile function from the fs module. this reads a file asynchronously
// (err, data) => {    : This is the callback function, as Node runs this function after the file finishes reading
// A callback is a function passed into another function to run later
// Node basically says "Start reading the file.", then continues doing other things.
// Later, when reading finishes: "Okay, now run this callback function."
// data contains the file contents