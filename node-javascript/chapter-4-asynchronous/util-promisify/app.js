import util from 'util';
// Imports Node.js's built-in util module
// util contains helper tools/utilities.
// One important utility inside it is util.promisify()
// this converts callback-based functions into Promise-based functions.

import fs from 'fs';
// Imports Node.js's built-in File System module
// fs lets Node: read files, write files, delete files, rename files, create folders

fs.readFile('example.txt','utf8',(err, data)=>{
    if(err){
        console.log("Error reading file:", err);
        return;
    }
    console.log("File content:", data)
});
// line 11 Starts reading the file example.txt using UTF-8 text encoding
// This is asynchronous file reading
// Meaning:
// Node starts reading the file
// Node does NOT freeze
// Node continues doing other things
// later, the callback function runs
// (err, data) => { : This is the callback function, it runs after the file finishes reading
// in line 14, return stops the callback function immediately
// If no error happened print the file contents at line 16
// data contains the text inside the file

const readFilePromise = util.promisify(fs.readFile);
// promisify does converts this: fs.readFile(file, encoding, callback)
// into a Promise-based version
// so this line means "Create a Promise version of fs.readFile."
// now you can use Now you can use:
// await
// .then()
// .catch()


async function readFile(){
    try{
        const data = await readFilePromise('example.txt','utf8');
        console.log("File content:", data);
    }catch(error){
        console.error("Error reading file:", error.message);
    }
}
// async function readFile(){ Creates an async function named readFile
// async means "This function works with Promises." and allows await inside the function
// Also this function automatically returns a Promise
// at line 42, readFilePromise(...) starts asynchronously reading the file
// Because readFilePromise returns a Promise, await waits for the Promise to finish.
// await pauses ONLY this async function, not the entire program


readFile();