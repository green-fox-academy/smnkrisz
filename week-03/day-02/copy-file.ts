// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function copiedFile (text1: string, text2: string){
    let copyMade: boolean = true;
    try {
        let text = fs.readFileSync(text1);
        fs.writeFileSync(text2, text)
    }
    catch (error){
        copyMade = false;
    }
    return copyMade;
}
console.log(copiedFile('text1.txt', 'textcopied.txt'));