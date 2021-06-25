const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw Line play for 1XP as per: https://github.com/green-fox-academy/teaching-materials/blob/master/project/drawing/r1.png

let canvasWidth: number = 400;
let canvasHeight: number = 400;

let spaceBetweenLines: number = 20;

function lines(startX: number, startY: number, endX: number, endY:number, color: string){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

for (let i = 0; i < canvasWidth / 2; i++){
    lines(0, i * spaceBetweenLines, i * spaceBetweenLines, canvasHeight, 'green');
}

