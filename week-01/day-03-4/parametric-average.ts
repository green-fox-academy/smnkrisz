// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let sum: number = 0;
let average: number;

for (let i = 1; i <= input; i++) {
    sum = sum + i;
}
    average = sum / input;

console.log('input', input);
console.log('output: Sum', sum, ', Average:', average)