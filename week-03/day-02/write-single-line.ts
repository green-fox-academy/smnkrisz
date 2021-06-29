// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

let fs = require('fs');

function manipulatedFile (fileName: string) {
    try {
        let myNAme = 'Simon Krisztián';
        fs.writeFileSync('my-file2.txt', myNAme);
    }
    catch (error){
        console.log(' Unable to read file: ${fileName}');
    }
}

manipulatedFile('my-file2.txt');