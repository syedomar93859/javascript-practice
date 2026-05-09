const fs = require('fs');
// It imports Node.js’s built-in File System module
// fs stands for file system
// This module lets Node:
// create files
// read files
// edit files
// delete files


fs.writeFileSync('example.txt', 'Hello, this is a simple text file');
// It creates or overwrites a file synchronously.
// example.txt: The filename/path to create.
// Hello, this is a simple text file: The content written into the file.

console.log("File has been created successfully,");

const data = fs.readFileSync('example.txt', 'utf8');
// this lines reads a file from my computer
// example.txt is the file I want to read
// utf8 tells Node to interpret the file as readable text

console.log('File Content:', data);

fs.appendFileSync('example.txt','\nThis is additional content.');
// this line adds text to the end of an existing file without deleting what’s already there

const new_data = fs.readFileSync('example.txt', 'utf8');
// read the updated file, including the newly appended content.

console.log('Content has been appended. New file content:', new_data);

fs.renameSync('example.txt', 'renamedFile.txt');
// this line renames a file

console.log('File has been renamed.');

fs.unlinkSync('renamedFile.txt');
// this line permanently deletes the file named renamedFile.txt from your file system.

console.log('File has been deleted.');