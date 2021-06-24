const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

let endX: number = 300;
let endY: number = 200;

function firstLine(startX: number, startY: number){ 
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}
    for (let i = 0; i < 5; i++) {
        let startX = (Math.random() * 365) + i;
        let startY = (Math.random() * 365) + i;
        firstLine (startX, startY);
}