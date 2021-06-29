// Write a function that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function lines (filename: string){
    try {
        let myFile = fs.readFileSync(filename, 'utf-8');
        let linesOfFile = myFile.split('\n');
        console.log(linesOfFile.length);
    }
    catch (error){
        console.log(0);
    }
}
lines('my-file.txt');