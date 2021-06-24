const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

let canvasHeight: number = 400;
let canvasWidth: number = 600;

// box top side:
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvasWidth / 3, canvasHeight - 300);
ctx.lineTo(canvasWidth - 200,canvasHeight - 300);
ctx.stroke();

// box right side:
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(canvasWidth - 200,canvasHeight - 300);
ctx.lineTo(canvasWidth - 200,canvasHeight - 100);
ctx.stroke();

// box bottom:
ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(canvasWidth - 200,canvasHeight - 100);
ctx.lineTo(canvasWidth / 3, canvasHeight - 100);
ctx.stroke();

// box left side:
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(canvasWidth / 3, canvasHeight - 100);
ctx.lineTo(canvasWidth / 3, canvasHeight - 300);
ctx.stroke();