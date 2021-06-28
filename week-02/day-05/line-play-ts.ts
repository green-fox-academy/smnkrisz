const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw Line play for 1XP as per: https://github.com/green-fox-academy/teaching-materials/blob/master/project/drawing/r1.png

let canvasWidth: number = 600;
let canvasHeight: number = 600;

let spaceBetweenLines: number = 20;

function lines(startX: number, startY: number, endX: number, endY:number, color: string){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

for (let i = 0; i < 80; i++){
    lines(0, spaceBetweenLines * i, spaceBetweenLines * i, canvasHeight, 'green');
}

for (let i = 0; i < 80; i++){
    lines(spaceBetweenLines * i, 0, canvasHeight, spaceBetweenLines * i, 'purple');
}