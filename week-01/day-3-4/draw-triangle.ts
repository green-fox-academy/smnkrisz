// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


let lineCount: number = 4;
let i: string = '';

for (let j = 0; j < lineCount; j++) {
    i = i + '*';
    console.log(i);
}