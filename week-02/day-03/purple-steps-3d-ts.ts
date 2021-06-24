const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let x = 10;
let y = 10;

for (let i: number = 0; i < 6; i++){
    ctx.fillStyle = 'mediumpurple';
    ctx.beginPath();
    ctx.fillRect(x, x, y , y);
    ctx.strokeRect(x, x, y, y);

    x = x + y;
    y = y +15;
}