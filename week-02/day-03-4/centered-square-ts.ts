const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let squareWidth = 10;
let squareHeight = 10;

ctx.fillStyle = 'green';
ctx.fillRect(canvas.width / 2 - squareWidth / 2, canvas.height / 2 - squareHeight / 2, squareWidth, squareHeight);