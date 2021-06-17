/* Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2);
*/

let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

let swapInterim1 = numberToSwap1;
let swapInterim2 = numberToSwap2;

numberToSwap1 = swapInterim2;
numberToSwap2 = swapInterim1;

console.log(numberToSwap1);
console.log(numberToSwap2);