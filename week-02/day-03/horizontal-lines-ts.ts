const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

let startX = 100;
let startY = 100;

function firstLine(startX: number, startY: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 50, startY);
    ctx.stroke();
}
    for(let i = 0; i < 5; i++){
        firstLine(startX, startY + (i * 80));
}