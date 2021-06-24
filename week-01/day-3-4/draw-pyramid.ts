// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;


for (let i = 0 ; i <= 4; i++){
    let spaces = " ";

    for (let j = lineCount - i ; j > 0; j--){
        spaces += " "
    }
    for(let k = i * 2 - 1; k > 0 ; k--){
    spaces += "*"
    }
console.log(spaces);
}