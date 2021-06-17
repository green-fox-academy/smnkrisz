// arithmetic (+, -, /, *, %, **, ++, --)

let numberOfApples = 3;
let numberOfPears = numberOfApples--;

console.log('apples: ', numberOfApples); //2

let numberOfLemons = --numberOfApples;

console.log('pears: ', numberOfPears); //3
console.log('apples: ', numberOfApples); //1
console.log('lemons: ', numberOfLemons); //1 

//% is called modulo
let numberOfBananas = 8%4;
console.log(numberOfBananas);