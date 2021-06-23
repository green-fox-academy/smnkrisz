const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle
// draw a green vertical line to the canvas' middle

let canvasWidth: number = 600;
let canvasHeight: number = 400;

//red horizontal line:

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, canvasHeight / 2);
ctx.lineTo(canvasWidth, canvasHeight / 2);
ctx.stroke();

//green vertical line:

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(canvasWidth / 2, 0);
ctx.lineTo(canvasWidth / 2, canvasHeight);
ctx.stroke();