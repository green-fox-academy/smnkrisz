// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');

function readingMyFile (fileName: string) {
    try {
        let myFile = fs.readFileSync('my-file.txt', 'utf-8');
        console.log(myFile);
    }
    catch (error){
        console.log(' Unable to read file: ${fileName}');
    }
}

readingMyFile('my-file.txt');