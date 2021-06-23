const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

let x: number = 40;
let y: number = 70;
let startingPoint: number = 80;
let colors: string[] = ['blue', 'green', 'purple', 'red'];

function rectangles() {
    for (let i = 0; i < colors.length; i++){
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.fillRect((x + i * 20), (y + i * 20), startingPoint, startingPoint + i);
        ctx.stroke();
    }
}
rectangles();