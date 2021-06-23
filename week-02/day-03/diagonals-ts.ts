import { Console } from "console";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

let canvasWidth: number = 600;
let canvasHeight: number = 400;

let topLeft: number[] = [0, 0];
let bottomLeft: number[] = [0, canvasHeight];
let topRight: number[] = [canvasWidth, 0];
let bottomRight: number[] = [canvasWidth, canvasHeight];

ctx.strokeStyle = 'green';
ctx.strokeStyle = 'red';

function singleLine(starts: number[], ends: number[]) {
    if (starts === topLeft && ends === bottomRight) {
        ctx.strokeStyle = 'green';
    }   else { starts === topRight && ends === bottomLeft; 
        ctx.strokeStyle = 'red'
    }
    ctx.beginPath();
    ctx.moveTo(starts[0],starts[1]);
    ctx.lineTo(ends[0], ends[1]);
    ctx.stroke();
}
singleLine(topLeft, bottomRight);

// the red way:
singleLine(topRight, bottomLeft);