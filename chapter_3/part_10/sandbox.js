// variables & block scope
const age = 30; // this is global


if (true){
    const age = 40; // this is local to this statement
    // age = 40; this redfines the global age variables
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if (true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
        var test = 'hello';
    }
}

console.log('outside code block: ', age, name, test);