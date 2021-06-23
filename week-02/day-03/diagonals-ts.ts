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

function singleLine(xStart ,yStart ,xEnd ,yEnd ){


    if ( xStart == 0 && yStart == 0 ){
         ctx.strokeStyle = 'green'
    } else  ctx.strokeStyle = 'red';

    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();


}

singleLine(0,0,canvasWidth,canvasHeight);

// red way:
// singleLine(canvasWidth, canvasHeight, 0, 0);