const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

let canvasHeight: number = 400;
let canvasWidth: number = 600;

function square(size: number){
    let startX: number = (canvasWidth / 2) - (size / 2);
    let startY: number = (canvasHeight / 2) - (size / 2);
    ctx.beginPath();
    ctx.strokeRect(startX, startY, size, size);
    ctx.stroke();
}
for (let i = 0; i < 5; i++){
    let squares: number = i * 50;
    square(squares);
}
