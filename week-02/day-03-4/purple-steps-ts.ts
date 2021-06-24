const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


function square(x: number){
    ctx.fillStyle = 'mediumpurple';
    ctx.fillRect(x , x, 10, 10);
    ctx.strokeRect(x, x, 10, 10);
}
for (let i = 1; i < 19; i++){
    let x = i * 10;
    square(x);
}