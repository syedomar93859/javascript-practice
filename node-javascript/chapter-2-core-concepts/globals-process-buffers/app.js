console.log("Current Directory:", __dirname);
// __dirname is a Node.js global variable that stores the absolute path of the folder containing the current file

console.log("Current File:", __filename);
// __filename stores the absolute path of the current file itself

console.log("Global Object:", global);
// In Node.js, :global is the top-level global object.
// Anything attached to it becomes available everywhere.
// Similar to: window in browsers

console.log("Command-Line Arguments:", process.argv);
// process.argv gives you the command-line arguments used to run your Node.js program
// It returns an array.

// Run: node app.js hello world
// Then:
// console.log(process.argv);

// might output:

// [
//   '/usr/local/bin/node',
//   '/Users/syed/app.js',
//   'hello',
//   'world'
// ]

// You usually access user arguments like this:
// const name = process.argv[2];
// console.log(`Hello ${name}`);

// Run: node app.js Syed

// Output: Hello Syed

const buffer1 = Buffer.from('Hello, Node.js.');
// creates a Buffer object.
// a buffer is raw binary memory used to store data
// Node.js uses buffers for files, networking, streams and binary data
// internally the text('Hello, Node.js.') got stored and became bytes

console.log(buffer1)
// this output the hexadecimal byte values for each character in the text

console.log("Buffer Content:", buffer1.toString());
// the .toString converts the raw bytes back into readable text