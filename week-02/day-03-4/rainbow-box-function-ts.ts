const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let canvasHeight: number = 400;
let canvasWidth: number = 600;

function squares(size: number, color: string){
    let startX: number = (canvasWidth / 2) - (size / 2);
    let startY: number = (canvasHeight / 2) - (size / 2);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(startX, startY, size, size);
    ctx.stroke();
}
for (let i = 6; i >= 0; i--){
    let squareSize = i *80;
    let colors: string [] = ['', 'red', 'blue', 'yellow', 'green', 'purple', 'orange'];

    squares(squareSize, colors[i]);
}