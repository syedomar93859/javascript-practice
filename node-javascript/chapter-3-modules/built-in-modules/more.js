import path from 'path';
// path is a built-in Node.js module that helps work with: file paths, folder paths, filenames

import { fileURLToPath } from 'url';
// imports a function called fileURLToPath from Node's built-in url module

const __filename = fileURLToPath(import.meta.url);
// import.meta.url gets the URL of the current file
// Example: file:///Users/syed/project/more.js
// fileURLToPath(...) converts it into /Users/syed/project/more.js
// __filename stores the full path of the current file

const __dirname = path.dirname(__filename);
// dirname() extracts: the folder path from a full file path
// Example:
// If: /Users/syed/project/more.js
// Then: path.dirname(...) returns: /Users/syed/project

const filePath = path.join(__dirname, 'example.txt');
// path.join() combines paths safely
// Example
// If: __dirname = /Users/syed/project
// then: path.join(__dirname, 'example.txt') becomes: /Users/syed/project/example.txt

console.log('File Path:', filePath);