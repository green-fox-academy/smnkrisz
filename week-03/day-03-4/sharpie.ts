// Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a floating point number) and the
// inkAmount (another floating point number)

import { spawn } from "child_process";

// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10

class Sharpie {
    color: string = '';
    width: number;
    inkAmount: number = 100;

    constructor (color: string, width: number, inkAmount?: number){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount || this.inkAmount;
    }

    use() {
        this.inkAmount = this.inkAmount - 10;
        return this
    }

    show() {
        console.log(`Decreased ink: ${this.inkAmount}`);
    }
}

let sharpie1 = new Sharpie('green', 10);
let sharpie2 = new Sharpie('purple', 15);

sharpie1.use().use().show();
sharpie2.use().show();