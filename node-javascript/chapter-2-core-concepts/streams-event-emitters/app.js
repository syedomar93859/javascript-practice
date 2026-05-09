// streams help with reading a file in pieces (chunks) instead of loading the whole file at once.

const fs = require('fs');

fs.writeFileSync('example.txt', 'Hello, this is a sample text file!');
//Use writeFileSync / writeFile for small, simple tasks
// Use streams (createWriteStream) for large, continuous, or performance-sensitive tasks

console.log("File has been created successfully.");

const readStream = fs.createReadStream('example.txt', 'utf8');
// this creates a stream reader for the file
// this is so that instead of reading everything, storing in memory and then using it, we read piece by piece
// a chunk is a small part of the file
// So if the file is: Hello this is a very large file...
// Node might split it into:
// Chunk1: "Hello this is a"
// Chunk2: " very large file..."

readStream.on('data', (chunk) => {
    console.log('Received Chunk:', chunk);
});
// line 13 means that every time a chunk of data is ready, run this function
// line print prints each chunk as it arrives
// streams are used when working with large files, video, audios, network requests, real-time data
// this is because it helps use less memory and start processing immediately and is faster for big data

const writeStream = fs.createWriteStream('output.txt');
// it creates a stream that write data into a file gradually
// if output.txt does not exist, it is created
// if it exists, it is overwritten

writeStream.write('Hello, this is written using a stream.\n');
// Write the first chunk of data into the file

writeStream.end('This is the final line');
// write the final chunk, closes the stream and signals writing is done
// without .end() the file may stay open and data may not fully flush to disk, so this helps finish writing properly

console.log('Data has been written successfully.');

const EventEmitter = require('events');
// this imports Node’s built-in events system
// EventEmitter is a system where: 
// one part of your program can “emit” (send) events
// and other parts can “listen” and react

const myEmitter = new EventEmitter();
// Creates an object that can:
// emit events
// listen for events

myEmitter.on('greet', (name)=>{
    console.log(`Hello, ${name}!`)
});
// .on() means “When the event called 'greet' happens, run this function.”
// So you're setting up a listener.
// You are saying: “When someone presses the button called 'greet', do something.”

myEmitter.emit('greet', 'Bobby');
// emit() triggers the event: “Hey! The event 'greet' just happened.”
// And passes data: 'Bobby'